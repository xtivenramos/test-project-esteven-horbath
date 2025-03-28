import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'users', schema: 'public' })
export class UserEntity {
    @ApiProperty({ example: 'Laptop Gamer', description: 'username' })
    @PrimaryColumn({ type: 'varchar', length: 255, nullable: false })
    username: string;

    @ApiProperty({ example: '12345', description: 'Contraseña' })
    @Column({ type: 'varchar', length: 255, nullable: false })
    password: string;
}
