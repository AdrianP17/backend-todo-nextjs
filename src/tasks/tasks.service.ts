import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Task  } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export  class TasksService {
    constructor(private prisma: PrismaService) {}
    async getAll(){
        return await this.prisma.task.findMany()
    }

    async getById(id : number) {
       return await this.prisma.task.findUnique({where: {id: id}})
    }

    create(task: any){
        return this.prisma.task.create({data: task})
    }

    delete(id: number){
        return this.prisma.task.delete({where: {id: id}})
    }

    update(id: number, task: any) {
        return this.prisma.task.update({where: {id: id}, data: task})
    }

    patchStatus(id: number, status: string) {
        return this.prisma.task.update({where: {id: id}, data: {status: status}})
    }

}
