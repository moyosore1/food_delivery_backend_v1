import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Category } from "./category.schema";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "category" })
    category: Category;

    @Prop()
    price: Number;

    @Prop(
        raw({
            small: { type: Number },
            medium: { type: Number },
            large: { type: Number },
        }),
    )
    size: Record<string, any>;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
