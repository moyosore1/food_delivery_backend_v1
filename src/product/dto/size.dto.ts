import { IsNumber } from "class-validator";

export class SizeDto {
    @IsNumber()
    small: number;

    @IsNumber()
    medium: number;

    @IsNumber()
    large: number;
}
