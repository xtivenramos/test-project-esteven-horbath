import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos';
import { IProduct } from './interfaces';
import { PaginationParams } from 'src/common/interfaces/entities/pagination-params.interface';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ) {}

    async findAll(paginationParams: PaginationParams){
        const data = await this.productRepository.find({
            skip: (Number(paginationParams.page) - 1) * Number(paginationParams.count),
            take: Number(paginationParams.count),
        })

        const response = new PaginationDto<IProduct>();
        response.data = data;
        response.page = paginationParams.page;
        response.count = paginationParams.count;
        return response;
    }

    findOne(id: number) {
        return this.productRepository.findOne({ where: { id } });
    }

    create(product: IProduct) {
      const newProduct = this.productRepository.create(product);
      return this.productRepository.save(newProduct);
    }
    async update(id: number, product: IProduct) {
      await this.productRepository.update(id, product);
      return this.findOne(id);
  }
  

    async remove(id: number) {
        await this.productRepository.delete(id);
        return { deleted: true };
    }
}
