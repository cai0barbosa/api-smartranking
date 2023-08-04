import { IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsNotEmpty()
    @IsString()
    readonly phone: String;
    
    @IsNotEmpty()
    @IsString()
    readonly mail: String;

    @IsNotEmpty()
    @IsString()
    readonly name: String;
}
