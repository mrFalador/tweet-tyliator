import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "http:localhost:3000"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.enableCors({
        credentials: true,
        origin: "http://localhost:3000",
      });

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

start();