# CRUD de Productos con NestJS, TypeORM y PostgreSQL

Este proyecto es una API REST desarrollada con NestJS, utilizando TypeORM como ORM y PostgreSQL como base de datos. Se incluye la documentación con Swagger para facilitar las pruebas.

## Instalación

1. Instalar dependencias:
   ```
   pnpm install
   ```

2. Configurar variables de entorno:  
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=1234
    DB_NAME=horbath-db-pg
   ```

3. Levantar el contenedor de PostgreSQL con Docker (opcional):
   ```
   docker-compose up -d
   ```

4. Iniciar el servidor:
   ```
   pnpm start:dev
   ```

## Endpoints

Una vez corriendo el servidor, puedes acceder a la documentación generada por Swagger en:

http://localhost:3000/api

### CRUD de Productos

- `GET /products` - Listar todos los productos  
- `GET /products/:id` - Obtener un producto por ID  
- `POST /products` - Crear un nuevo producto  
- `PUT /products/:id` - Actualizar un producto  
- `DELETE /products/:id` - Eliminar un producto  

## Tecnologías usadas

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Swagger
- Docker

## Licencia

Este proyecto está bajo la licencia MIT.
