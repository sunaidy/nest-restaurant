import { Injectable, Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { RestaurantModule } from 'apps/main/src/restaurant/restaurant.module';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Order, OrderDocument, OrderSchema } from './schema/order.sheme';
import { Model } from 'mongoose';

@Module({
  imports: [
    RestaurantModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])
  ]     ,
  controllers: [OrderController],
  providers: [OrderService]
})

@Injectable()
export class OrderModule {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}
}
