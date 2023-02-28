import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest();
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, "secret");
            req.user = decoded;
            return true;
        } catch (err) {
            throw new UnauthorizedException("Invalid token");
        }
    }
}
