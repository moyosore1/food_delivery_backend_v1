import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import { User, UserDocument } from "../schema/user.schema";

@Injectable()
export class createUsers {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async register(
        phone: string,
        password: string,
        email: string,
    ): Promise<User> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds); // hash the password with a salt of 10 round

        const user = new this.userModel({
            phone: phone,
            password: hashedPassword,
            email: email,
        });
        console.log(user);

        return await user.save();
    }
}
