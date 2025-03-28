import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
    @ApiProperty({ example: 'estevenr', description: 'Username' })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: '1234', description: 'Contraseña' })
    @IsString()
    @IsNotEmpty()
    password: string;
}
