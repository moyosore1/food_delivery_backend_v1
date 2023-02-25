import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { successResponse, SuccessResponseType } from "src/utils/response";
import { CreateProductDto } from "./dto/create_product.dto";
import { CreateProductService } from "./services/create_product.service";
// import { successResponse, SuccessResponseType } from "src/utils/response";

@Controller("product")
export class ProductController {
    constructor(private readonly createProductService: CreateProductService) {}

    @Post("create")
    @HttpCode(201)
    async createUser(
        @Body() data: CreateProductDto,
    ): Promise<SuccessResponseType> {
        const result = await this.createProductService.execute(data);
        return successResponse({
            message: "User Account has been created",
            code: HttpStatus.CREATED,
            data: result,
        });
    }
}
