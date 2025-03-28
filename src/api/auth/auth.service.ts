import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { IUser } from '../users/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async register(user: IUser) {
        return this.usersService.register(user);
    }
    async signIn(username: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
            throw new UnauthorizedException('No tiene acceso');
        }
        const payload = { username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
