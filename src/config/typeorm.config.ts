import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

import * as dotenv from 'dotenv';
import { ProductEntity } from 'src/api/products/entities';
import { UserEntity } from 'src/api/users/entities';
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProductEntity, UserEntity],
  synchronize: true,
}
