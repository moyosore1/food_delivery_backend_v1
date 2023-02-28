import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ collection: "categories" })
export class Category {
    @Prop()
    name: string;

    @Prop()
    imageUrl?: string;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
