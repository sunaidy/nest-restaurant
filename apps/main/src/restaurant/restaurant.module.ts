import { Injectable, Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema, RestauratDocument } from './schema/restaurant.sheme';
import { Model } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchema }])],
  controllers: [RestaurantController],
  providers: [RestaurantService]
})

@Injectable()
export class RestaurantModule {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<RestauratDocument>) {}
}
