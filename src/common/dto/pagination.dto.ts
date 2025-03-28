import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaginationDto<T> {
    @ApiProperty({ example: '', description: 'Datos' })
    @IsNotEmpty()
    data: T[];

    @ApiProperty({ example: '1', description: 'Número de página' })
    @IsNotEmpty()
    @IsString()
    @Type(() => Number)
    page: string;

    @ApiProperty({ example: '1', description: 'Número de página' })
    @IsNotEmpty()
    @IsString()
    @Type(() => Number)
    count: string;
}
