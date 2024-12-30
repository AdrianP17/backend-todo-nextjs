import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import {hash, compare} from "bcrypt"

import { registerAuth } from './dto/register-auth.dto';
import { PrismaService } from 'src/prisma.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        private prisma: PrismaService
    ) {}
    
    async signIn(
        username: string, 
        pass: string
    ): Promise<{access_token: string}> {
        const user = await this.usersService.findOne(username);
        if(!user) {
            throw new NotFoundException('Usuario no encontrado')
        }

        const isCorrect = await compare(pass,user.password)
        if (!isCorrect) {
          throw new UnauthorizedException("Contraseña incorrecta");
        }

        // TODO: Generate a JWT and return it here
        // instead of the user object
        const payload = {sub: user.id, username: user.username};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
      }

    async register(user : registerAuth) {
        //Hashear password
        const {password} = user
        const hashedPassword = await hash(password, 10)
        // Cambiamos el password por la contra hasheada
        user = {...user, password: hashedPassword}

        return this.prisma.user.create({data:user})
    }
}
