import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { createUserDto } from 'src/users/dto/create-user-dto';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService){}

    async login(userDto: createUserDto){
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }


    async registration( userDto: createUserDto){
        const candidate = await this.userService.getUserByName(userDto.name);
        if (candidate) {
            throw new HttpException('Такой пользователь уже существует', HttpStatus.BAD_REQUEST);
        }
        const hashPasswod = await bcrypt.hash(userDto.password, 8);
        const user = await this.userService.createUser({...userDto, password: hashPasswod});
        return this.generateToken(user);
    }

    private async generateToken(user: User){
        const payload = {name: user.name, id: user.id};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: createUserDto){
        const user = await this.userService.getUserByName(userDto.name);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user
        }
        throw new UnauthorizedException({message: 'Неправильные имя пользователя или пароль'});
    }
}
