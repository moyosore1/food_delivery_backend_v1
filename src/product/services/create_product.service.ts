import { Body, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "../dto/create_product.dto";
import { Product, ProductDocument } from "../schemas/product.schema";

@Injectable()
export class CreateProductService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    async execute(data: CreateProductDto) {
        const result = await new this.productModel(data);
        return result;
    }
}
