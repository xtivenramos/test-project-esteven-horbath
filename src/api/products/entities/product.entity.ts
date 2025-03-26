import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from 'src/common/entity/bases';
import { Entity, Column, CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { IProduct } from '../interfaces';
import { bigintTransformer } from 'src/common/entity/transformers';

@Entity({ name: 'products', schema: 'public' })
export class ProductEntity {
    @PrimaryColumn('bigint', {
        unique: true,
        generated: true,
        primary: true,
        comment: 'id principal de la tabla',
        transformer: bigintTransformer,
    })
    id?: number;

    @CreateDateColumn({
        select: true,
        update: false,
        name: 'created_at',
    })
    createdAt?: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        select: false,
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: true,
    })
    updatedAt?: Date;

    @ApiProperty({ example: 'Laptop Gamer', description: 'Nombre del producto' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    name: string;

    @ApiProperty({ example: 'Laptop con procesador i7 y 16GB RAM', description: 'Descripción del producto', required: false })
    @Column({ type: 'text', nullable: true })
    description?: string;

    @ApiProperty({ example: 1599.99, description: 'Precio del producto' })
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @ApiProperty({ example: 50, description: 'Cantidad disponible en stock' })
    @Column({ type: 'int', nullable: false })
    quantity: number;
}
