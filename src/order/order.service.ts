import { Injectable } from '@nestjs/common';
import { UpdateOrderDto } from './dto/update-order.dto';
import { order } from './interfaces/order.interface';

@Injectable()
export class OrderService {
    private orders: order[] = [];

  create(order: order) {
    this.orders.push(order);
  }

  findAll(): order[] {
    return this.orders;
  }

  findOne(id: number) {
    return this.orders.find((obj)=>{(obj.id == id)})
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    this.orders = this.orders.map((obj)=>obj.id == id ? {...obj, ...updateOrderDto}:obj )
    return this.orders;
  }

  remove(id: number) {
    this.orders = this.orders.filter((obj)=> {return obj.id != id })
    return this.orders;
  }
}
