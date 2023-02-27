import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
} from "@nestjs/common";
import { successResponse, SuccessResponseType } from "src/utils/response";
import { CreateProductDto } from "./dto/create_product.dto";
import { CreateProductService } from "./services/create_product.service";
import { GetProducts } from "./services/get_products.service";

@Controller("products")
export class ProductController {
    constructor(
        private readonly createProductService: CreateProductService,
        private readonly getProducts: GetProducts,
    ) {}

    @Post("")
    @HttpCode(201)
    async createProduct(
        @Body() data: CreateProductDto,
    ): Promise<SuccessResponseType> {
        const result = await this.createProductService.execute(data);
        return successResponse({
            message: "Product has been created",
            code: HttpStatus.CREATED,
            data: result,
        });
    }

    @Get("")
    async getAllProducts() {
        const result = await this.getProducts.execute();
        return successResponse({
            message: "Products retrieved successfully.",
            code: HttpStatus.OK,
            data: result,
        });
    }
}
