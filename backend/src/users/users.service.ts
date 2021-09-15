import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { createUserDto } from './dto/create-user-dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async createUser(dto: createUserDto){
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getUserByName(name: string){
        const user = await this.userRepository.findOne({where: {name}});
        return user;
    }
}
