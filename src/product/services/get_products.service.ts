import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "../schemas/product.schema";

@Injectable()
export class GetProducts {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    async execute() {
        const result = await this.productModel.find();
        return result;
    }
}
