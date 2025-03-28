import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
    constructor(
      @InjectRepository(UserEntity)
              private userRepository: Repository<UserEntity>,
    ) {}

    register(user: IUser) {
        return this.userRepository.save(user);
    }

    findOne(username: string) {
        return this.userRepository.findOne({ where: { username } });
    }
}
