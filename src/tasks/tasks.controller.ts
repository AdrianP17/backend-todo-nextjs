import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from '@prisma/client';
import { createTask } from './dto/create-task-dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService ) {}

    @Get('')
    getAllTasks() {
        return this.tasksService.getAll()
    }

    @Get('/:id')
    getById(@Param('id', ParseIntPipe) id : number ) {
        return this.tasksService.getById(id)
    }

    @Post('')
    create(@Body() task : createTask) {
        return this.tasksService.create(task)
    }

    @Put('/:id')
    update(@Param('id', ParseIntPipe) id : number, @Body() task : Task ) {
        return this.tasksService.update(id, task)
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id : number) {
        return this.tasksService.delete(id)
    }

    @UseGuards(AuthGuard)
    @Put('/status/:id')
    changeStatus(@Param('id', ParseIntPipe) id : number, @Body() data: {status: string} ) {
        return this.tasksService.changeStatus(id, data)
    }

    @UseGuards(AuthGuard)
    @Put('/priority/:id')
    changePriority(@Param('id', ParseIntPipe) id : number, @Body() data: {priority: string} ) {
        return this.tasksService.changePriority(id, data)
    }

}
