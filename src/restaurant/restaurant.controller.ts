import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { restaurant } from './interfaces/restaurant.interface';
import { RestaurantService } from './restaurant.service';

@Controller("restaurant")
export class RestaurantController {
  constructor(private restaurantService: RestaurantService) {}

  @Post()
  async create(@Body() CreateRestaurantDto: CreateRestaurantDto) {
    this.restaurantService.create(CreateRestaurantDto);
  }

  @Get()
  async findAll(): Promise<restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateRestaurantDto: UpdateRestaurantDto) {
    return this.restaurantService.update(+id, UpdateRestaurantDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.restaurantService.remove(+id);
  }
}
