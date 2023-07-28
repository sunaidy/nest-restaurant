import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ClientController } from './client/client.controller'; 
import { ClientService } from './client/client.service';
import { ClientModule } from './client/client.module';
import { logger } from '../middleware/logger.middleware';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { OrderModule } from './order/order.module';
@Module({
  imports: [ClientModule, RestaurantModule, OrderModule],
  controllers: [ClientController, RestaurantController],
  providers: [ClientService, RestaurantService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(ClientController, RestaurantController);
  }
}
