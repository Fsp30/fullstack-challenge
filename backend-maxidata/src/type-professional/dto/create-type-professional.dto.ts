import { IsBoolean, IsNotEmpty, IsString } from "class-validator"
export class CreateTypeProfessionalDto {
        @IsString()
        @IsNotEmpty()
        describe: string

        @IsBoolean()
        situation: boolean
}
