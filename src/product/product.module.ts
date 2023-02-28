import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { Category, CategorySchema } from "./schemas/category.schema";
import { Product, ProductSchema } from "./schemas/product.schema";
import { CreateProductService } from "./services/create_product.service";
import { GetProducts } from "./services/get_products.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Product.name, schema: ProductSchema },
            { name: Category.name, schema: CategorySchema },
        ]),
    ],
    providers: [CreateProductService, GetProducts],
    controllers: [ProductController],
})
export class ProductModule {}
