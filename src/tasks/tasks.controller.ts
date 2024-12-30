import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { createTask } from './dto/create-task-dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService ) {}

    @Get('')
    getAllTasks() {
        this.tasksService.getAll()
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id : number ) {
        this.tasksService.getById(id)
    }

    @Post('')
    create(@Body() task : createTask) {
        this.tasksService.create(task)
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id : number, @Body() task : Task ) {
        this.tasksService.update(id, task)
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id : number) {
        this.tasksService.delete(id)
    }

    @Patch('/:id')
    changeStatus(@Param('id', ParseIntPipe) id : number, @Body() status: string ) {
        this.tasksService.patchStatus(id, status)
    }
}
