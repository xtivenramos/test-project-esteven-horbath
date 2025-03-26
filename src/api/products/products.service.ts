import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dtos';
import { IProduct } from './interfaces';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ) {}

    findAll() {
        return this.productRepository.find();
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
