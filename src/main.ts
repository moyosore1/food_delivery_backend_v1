import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // whitelist removes all properties of a request’s body which are not in the DTO
    // this property would allow us to transform properties, for instance, an integer to a string.
    app.useGlobalPipes(
        new ValidationPipe({ whitelist: true, transform: true }),
    );
    await app.listen(8000);
}
bootstrap();
