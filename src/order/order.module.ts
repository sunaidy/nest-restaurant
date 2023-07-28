import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ClientModule } from 'src/client/client.module';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
  imports: [ClientModule, RestaurantModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
