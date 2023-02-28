import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { User, UserDocument } from "../schema/user.schema";

@Injectable()
export class getUsers {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}
    async login(phone: string, password: string): Promise<{ token: string }> {
        const user = await this.userModel.findOne({ phone });
        if (!user) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new UnauthorizedException("Invalid credentials");
        }

        const token = jwt.sign({ user }, "secret", { expiresIn: "1h" });
        return { token };
    }
}
