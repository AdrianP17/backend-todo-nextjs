import { Task } from "@prisma/client";

export type createTask = Omit<Task, "id" | "created_at" | "updated_at">