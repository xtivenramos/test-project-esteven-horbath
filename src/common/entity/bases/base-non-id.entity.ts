import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IBaseModel } from 'src/common/interfaces/entities';

export class BaseNonIdEntity<T> implements IBaseModel {
    @ApiHideProperty()
    @Column('int', {
        nullable: true,
        select: false,
        name: 'create_by',
    })
    createdBy?: number;

    @ApiHideProperty()
    @CreateDateColumn({
        select: true,
        update: false,
        name: 'created_at',
    })
    createdAt?: Date;

    @ApiHideProperty()
    @Column('int', {
        nullable: true,
        select: false,
        name: 'update_by',
    })
    updatedBy?: number;

    @UpdateDateColumn({
        type: 'timestamp',
        select: false,
        onUpdate: 'CURRENT_TIMESTAMP',
        name: 'update_at',
        nullable: true,
    })
    updatedAt?: Date;

    @ApiHideProperty()
    @Column('int', {
        nullable: true,
        select: false,
        name: 'delete_by',
    })
    deletedBy?: number;

    @ApiHideProperty()
    @Column('timestamp', {
        nullable: true,
        select: false,
        name: 'delete_at',
    })
    deletedAt?: Date;

    @ApiProperty({
        description: 'Estado del registro',
        example: 1,
        required: false,
        name: 'status',
    })
    @Column('boolean', { default: true })
    status?: boolean;

    constructor(entity: Partial<T>) {
        Object.assign(this, entity);
    }
}
