import { Type } from "class-transformer";
import { IsString } from "class-validator";
import {
    IsDefined,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    ValidateNested,
} from "class-validator/types/decorator/decorators";
import { SizeDto } from "./size.dto";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;

    @IsObject()
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => SizeDto)
    size!: SizeDto;
}
