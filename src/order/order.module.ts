import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ClientModule } from 'src/client/client.module';
import { RestaurantModule } from 'src/restaurant/restaurant.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schema/order.sheme';

@Module({
  imports: [
    ClientModule,
    RestaurantModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
  ]     ,
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
