import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { restaurant } from './interfaces/restaurant.interface';
import { Restaurant } from './schema/restaurant.sheme';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
@Injectable()
export class RestaurantService {
  private restaurants: restaurant[] = [];
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}
  
  create(restaurant: CreateRestaurantDto) {
    try{
      const createdRestaurat = new this.restaurantModel(restaurant);
      return createdRestaurat.save();
    } catch(error){
      throw new HttpException('Failed to create restaurant', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  restaurantEntranceValidation (restaurant: restaurant) {
    let client = restaurant.clients.find((obj)=>{(obj.age < 18)})
      if (restaurant.clients.length > restaurant.capacity) {
        return false
      }
      
  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findById(id)
  }

 async update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<UpdateRestaurantDto> {
    try{
      const updateRestaurat = await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto)
      return this.restaurantModel.findById(id);
    } catch(error){
      throw new HttpException('Failed to update restaurant', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async remove(id: string): Promise<UpdateRestaurantDto>  {
    try{
      return await this.restaurantModel.findByIdAndDelete(id)
    } catch(error){
      throw new HttpException('Failed to delecte restaurant', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
