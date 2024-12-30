import { User } from "@prisma/client"
export type createUser = Omit<User, "id">