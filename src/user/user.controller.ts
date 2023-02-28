import { Controller, Post, Body, UseGuards } from "@nestjs/common";
import { createUsers } from "../user/services/create_users";
import { getUsers } from "../user/services/get_users";
import { UserDto } from "./DTO/users.dto";
import { AuthGuard } from "./guards/authGuard";

@Controller("auth")
export class UserController {
    constructor(
        private readonly createUsers: createUsers,
        private readonly getUsers: getUsers,
    ) {}

    @Post("register")
    async register(@Body() UserDto: UserDto) {
        const user = await this.createUsers.register(
            UserDto.phone,
            UserDto.password,
            UserDto.email,
        );
        console.log(user);
        console.log(UserDto.password);
        return user;
    }

    @Post("login")
    async login(@Body() UserDto: UserDto) {
        const token = await this.getUsers.login(
            UserDto.phone,
            UserDto.password,
        );

        return token;
    }

    // @Post("profile")
    // @UseGuards(AuthGuard)
    // async profile(@Body() body: { phone: string }) {
    //     const user = await this.authService.findUserByPhone(body.phone);
    //     return user;
    // }
}
