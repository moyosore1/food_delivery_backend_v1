import { IsEmail, IsString, MinLength, IsNumber } from "class-validator";
import { Transform } from "class-transformer";

export class UserDto {
    @IsEmail()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    @MinLength(8)
    @Transform(({ value }) => value.trim()) // transform incoming password data to remove whitespace
    password: string;
}
