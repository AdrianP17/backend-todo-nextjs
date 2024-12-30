import { ApiProperty } from "@nestjs/swagger"
export class loginAuth {
    @ApiProperty({ example: 'User123' })
    username : string

    @ApiProperty({ example: 'random-password' })
    password: string
}