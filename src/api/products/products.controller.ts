import { Body, Controller, Get, Post, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, FindAllProductPaginationParamDto, UpdateProductDto } from './dtos';
import { AuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { IProduct } from './interfaces';
import { PaginationParams } from 'src/common/interfaces/entities/pagination-params.interface';

@Controller('products')
@UseGuards(AuthGuard)
@ApiBearerAuth()
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Get()
    async findAll(@Query() params: FindAllProductPaginationParamDto) : Promise<PaginationDto<IProduct>> {
        return await this.productsService.findAll(params);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productsService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productsService.update(+id, updateProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
