import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            urls: ['amqps://eaavdbel:CQGnGZ0FVHwEGRgEZ2LuT72KxDD5cupa@gull.rmq.cloudamqp.com/eaavdbel'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });
     await app.listen();
}
bootstrap();
