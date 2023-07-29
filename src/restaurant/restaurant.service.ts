import { Injectable } from '@nestjs/common';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { restaurant } from './interfaces/restaurant.interface';

@Injectable()
export class RestaurantService {
  private restaurants: restaurant[] = [];

  create(restaurant: restaurant) {
    this.restaurants.push(restaurant);
  }

  restaurantEntranceValidation (restaurant: restaurant) {
    let client = restaurant.clients.find((obj)=>{(obj.age < 18)})
      if (restaurant.clients.length > restaurant.capacity) {
        return false
      }
      
  }

  findAll(): restaurant[] {
    return this.restaurants;
  }

  findOne(id: number) {
    return this.restaurants.find((obj)=>{(obj.id == id)})
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    this.restaurants = this.restaurants.map((obj)=>obj.id == id ? {...obj, ...updateRestaurantDto}:obj )
    return this.restaurants;
  }

  remove(id: number) {
    this.restaurants = this.restaurants.filter((obj)=> {return obj.id != id })
    return this.restaurants;
  }
}
