import { IsNumber } from "class-validator/types/decorator/decorators";

export class SizeDto {
    @IsNumber()
    small: number;

    @IsNumber()
    medium: number;

    @IsNumber()
    large: number;
}
