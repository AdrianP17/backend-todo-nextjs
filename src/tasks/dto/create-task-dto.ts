import { ApiProperty } from "@nestjs/swagger";


export class createTask{
    @ApiProperty({ example: 'Some Title' })
    title: string
    @ApiProperty({ example: 'Some Description' })
    description: string
    @ApiProperty({ example: '1' })
    userId: number
    @ApiProperty({ example: '["work"]' })
    tags: string[]
}