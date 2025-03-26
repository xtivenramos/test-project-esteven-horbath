import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 'Laptop Gamer', description: 'Nombre del producto' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Laptop de alta gama para gaming', description: 'Descripción del producto' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1500, description: 'Precio del producto en USD' })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 10, description: 'Cantidad disponible en stock' })
  @IsNumber()
  @Min(0)
  quantity: number;
}
