import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { DataSource } from 'typeorm';
  import { catchError, tap } from 'rxjs/operators';
  import { CustomHttpException } from 'src/common/exceptions/custom-http.exception';
  
  @Injectable()
  export class TransactionInterceptor implements NestInterceptor {
    constructor(private readonly dataSource: DataSource) {}
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const queryRunner = this.dataSource.createQueryRunner();
  
      return new Observable((observer) => {
        queryRunner.connect().then(() => {
          queryRunner.startTransaction().then(() => {
            next
              .handle()
              .pipe(
                tap(async () => {
                  await queryRunner.commitTransaction();
                  await queryRunner.release();
                }),
                catchError(async (error) => {
                  // Solo realizar rollback para errores no controlados
                  if (!(error instanceof CustomHttpException)) {
                    await queryRunner.rollbackTransaction();
                  }
                  await queryRunner.release();
                  // Reemitir el error tal como fue recibido
                  observer.error(error);
                }),
              )
              .subscribe(observer);
          });
        });
      });
    }
  }
  