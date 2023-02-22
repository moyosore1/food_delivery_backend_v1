import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ unique: true, nullable: false })
    email: string;

    @Prop()
    phone: string;

    @Prop()
    password: string;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
