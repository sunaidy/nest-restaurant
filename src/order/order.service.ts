import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { order } from './interfaces/order.interface';
import { Order } from './schema/order.sheme';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrdenDto } from './dto/create-order.dto';
@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
    private orders: order[] = [];

  create(order: CreateOrdenDto) {
    try{
      const createdOrder = new this.orderModel(order);
      return createdOrder.save();
    } catch(error){
      throw new HttpException('Failed to create order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll():  Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  findOne(id: string):  Promise<UpdateOrderDto>  {
    return this.orderModel.findById(id)
  }

 async update(id: string, updateOrderDto: UpdateOrderDto):  Promise<UpdateOrderDto>  {
    try{
      await this.orderModel.findByIdAndUpdate(id,updateOrderDto);
      return this.findOne(id);
    } catch(error){
      throw new HttpException('Failed to update order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try{
      return await this.orderModel.findByIdAndDelete(id)
    } catch(error){
      throw new HttpException('Failed to delete order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
