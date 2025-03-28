import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() user: RegisterUserDto) {
        return this.authService.register(user);
    }

    @Post('login')
    login(@Body() signInDto: LoginUserDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    } 
}
