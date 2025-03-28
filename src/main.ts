import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder().setTitle('Products API').setDescription('API para gestionar productos').setVersion('1.0').addBearerAuth().build();

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true, // Ignora campos no definidos en el DTO
            forbidNonWhitelisted: true, // Lanza error si se envían campos no definidos
            transform: true, // Convierte los datos de entrada en instancias de DTOs
        }),
    );

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
