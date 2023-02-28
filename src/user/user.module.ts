import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/user.schema";
import { UserController } from "./user.controller";
import { createUsers } from "./services/create_users";
import { getUsers } from "./services/get_users";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [createUsers, getUsers],
})
export class UserModule {}
