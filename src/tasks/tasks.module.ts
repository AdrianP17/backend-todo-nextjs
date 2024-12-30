import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService, ConfigService]
})
export class TasksModule {}
