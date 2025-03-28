import { DataSource } from 'typeorm';
import { ProductEntity } from 'src/api/products/entities';

import * as dotenv from 'dotenv';
import { UserEntity } from 'src/api/users/entities';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProductEntity, UserEntity],
  synchronize: true,
  logging: true,
});
