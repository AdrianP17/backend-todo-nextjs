import { Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { Prisma, PrismaClient, Task  } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { createTask } from './dto/create-task-dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Injectable()
export  class TasksService {
    constructor(private prisma: PrismaService) {}
    
    async getAll(){
        return await this.prisma.task.findMany()
    }

    async getById(id : number) {
       const taskFound = await this.prisma.task.findUnique({where: {id: id}})
        if(!taskFound) { throw new NotFoundException('Tarea no encontrada') }
        return taskFound
    }

    async create(task: createTask){
        return await this.prisma.task.create({data: task})
    }

    async delete(id: number){
        const taskFound = await this.prisma.task.findUnique({where: {id: id}})
        if(!taskFound) { throw new NotFoundException('Tarea no encontrada') }
        return this.prisma.task.delete({where: {id: id}})
    }

    async update(id: number, task: Task) {
        const taskFound = await this.prisma.task.findUnique({where: {id: id}})
        if(!taskFound) { throw new NotFoundException('Tarea no encontrada') }
        return this.prisma.task.update({where: {id: id}, data: task})
    }

    async changeStatus(id: number, data: {status: string}) {
        return this.prisma.task.update({where: {id: id}, data: data})
    }

    async changePriority(id: number, data: {priority: string}) {
        return this.prisma.task.update({where: {id: id}, data: data})
    }
}
