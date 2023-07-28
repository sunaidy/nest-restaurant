import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { CreateOrdenDto } from './dto/create-order.dto';
import { order } from './interfaces/order.interface';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Post()
    async create(@Body() CreateOrdenDto: CreateOrdenDto) {
      this.orderService.create(CreateOrdenDto);
    }
  
    @Get()
    async findAll(): Promise<order[]> {
      return this.orderService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.orderService.findOne(+id);
    }
  
    @Patch(':id')
    async update(@Param('id') id: string, @Body() UpdateOrderDto: UpdateOrderDto) {
      return this.orderService.update(+id, UpdateOrderDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.orderService.remove(+id);
    }
}
