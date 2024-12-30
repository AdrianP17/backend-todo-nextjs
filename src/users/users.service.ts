import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { createUser } from './dto/create-user-dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService ) {}

    async findAll() : Promise<User[]> {
        return this.prisma.user.findMany()
    }

    async findOne(username: string): Promise<User | null> {
        return await this.prisma.user.findUnique({where: {username: username}})
    }

}
