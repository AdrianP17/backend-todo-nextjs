import { ApiProperty } from "@nestjs/swagger"
export class registerAuth {
    @ApiProperty({ example: 'Jhondoe12' })
    username : string
    @ApiProperty({ example: 'Jhon' })
    name: string
    @ApiProperty({ example: 'Doe' })
    lastname: string

    @ApiProperty({ example: 'Random-password' })
    password: string
}