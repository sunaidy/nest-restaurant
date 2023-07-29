import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ClientController } from './client/client.controller'; 
import { ClientModule } from './client/client.module';
import { logger } from '../middleware/logger.middleware';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { OrderModule } from './order/order.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientModule, 
    RestaurantModule,
    OrderModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL)
    ],
  providers: [],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(ClientController, RestaurantController);
  }
}
