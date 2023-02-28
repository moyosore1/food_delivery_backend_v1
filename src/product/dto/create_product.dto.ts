import { Type } from "class-transformer";
import {
    IsDefined,
    IsNotEmpty,
    IsNotEmptyObject,
    IsNumber,
    IsObject,
    IsString,
    ValidateNested,
} from "class-validator";

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
    size: SizeDto;
}
