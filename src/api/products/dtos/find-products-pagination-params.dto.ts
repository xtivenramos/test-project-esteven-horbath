import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FindAllProductPaginationParamDto {
    @ApiProperty({ example: '1', description: 'Número de página' })
    @IsNotEmpty()
    @Type(() => Number)
    page: string;

    @ApiProperty({ example: '1', description: 'Número de página' })
    @IsNotEmpty()
    @Type(() => Number)
    count: string;
}
