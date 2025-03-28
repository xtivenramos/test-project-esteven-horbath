import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/const/jwt.const';

@Module({
    imports: [UsersModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '16000s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
