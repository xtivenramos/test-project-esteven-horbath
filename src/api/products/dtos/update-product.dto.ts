import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
    @ApiProperty({ example: 'Laptop Gamer', description: 'Nombre del producto' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Laptop de alta gama para gaming', description: 'Descripción del producto' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: 1800, description: 'Nuevo precio', required: false })
    @IsOptional()
    @IsPositive({ message: 'El precio debe ser un valor positivo' })
    price?: number;

    @ApiProperty({ example: 5, description: 'Nueva cantidad disponible', required: false })
    @IsOptional()
    @IsInt({ message: 'La cantidad debe ser un número entero' })
    @IsPositive({ message: 'La cantidad debe ser un número entero positivo' })
    quantity?: number;
}
