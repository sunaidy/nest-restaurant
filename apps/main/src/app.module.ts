import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { logger } from '../../../middleware/logger.middleware';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { OrderModule } from './order/order.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ClientController } from './service/client.controller';
import configuration from '../../../config/configuration';

@Module({
  imports: [
    RestaurantModule,
    OrderModule,
    ClientsModule.register([
      { name: 'CLIENT_SERVICE', transport: Transport.TCP, options:{port:3001} },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL)
    ],
    controllers: [ClientController],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(ClientController, RestaurantController);
  }
}
