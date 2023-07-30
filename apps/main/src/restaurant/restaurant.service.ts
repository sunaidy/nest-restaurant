import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './schema/restaurant.sheme';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
@Injectable()
export class RestaurantService {
  constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}
  
  create(restaurant: CreateRestaurantDto) {
    try{
      const createdRestaurat = new this.restaurantModel(restaurant);
      if (createdRestaurat.clients.length <= createdRestaurat.capacity) {        
        return createdRestaurat.save();
      }
      throw new HttpException('You have exceeded the maximum capacity of clients per day', HttpStatus.BAD_REQUEST);
    } catch(error){
      throw new HttpException('Failed to create restaurant '+ error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }

  findOne(id: string): Promise<UpdateRestaurantDto> {
    return this.restaurantModel.findById(id)
  }

 async update(id: string, updateRestaurantDto: UpdateRestaurantDto): Promise<UpdateRestaurantDto> {
    try{
      const updateRestaurat = await this.restaurantModel.findByIdAndUpdate(id, updateRestaurantDto)
      return this.findOne(id);
    } catch(error){
      throw new HttpException('Failed to update restaurant', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async remove(id: string): Promise<UpdateRestaurantDto>  {
    try{
      return await this.restaurantModel.findByIdAndDelete(id)
    } catch(error){
      throw new HttpException('Failed to delete restaurant', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
