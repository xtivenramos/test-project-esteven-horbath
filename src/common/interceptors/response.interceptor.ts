import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    Inject,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    constructor(private readonly message: string = 'Success') {}
  
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
      return next.handle().pipe(
        map((data) => ({
          statusCode: 200,
          message: this.message,
          data,
        })),
      );
    }
  }
  