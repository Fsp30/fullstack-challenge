import { IsBoolean, IsDefined, IsNotEmpty, IsString } from "class-validator"
export class CreateTypeProfessionalDto {
        @IsString()
        @IsNotEmpty()
        @IsDefined()
        describe: string

        @IsBoolean()
        @IsDefined()
        situation: boolean
}
