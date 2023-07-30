import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ClientModule,
    {
      options:{
      port:3001
    },
      transport: Transport.TCP,
    },
  );
  await app.listen().then(()=>{
    console.log('client service started')
  });
}
bootstrap();
