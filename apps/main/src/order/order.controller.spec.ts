import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Client } from '../interfaces/client/dto/client.sheme';
import { Restaurant } from '../restaurant/schema/restaurant.sheme';
import { getModelToken } from '@nestjs/mongoose';
import { Order } from './schema/order.sheme';

describe('OrderController', () => {
  let controller: OrderController;
  let orderService: OrderService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        OrderService,
        { provide: getModelToken(Order.name), useValue: jest.fn() }
      ],
    }).compile();
    orderService = module.get<OrderService>(OrderService);
    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('get all orders', async () => {
      jest.spyOn(orderService, 'findAll').mockImplementation();
      expect(await controller.findAll());
    });
  });
});

export function generateClient(): Client {
  return   {
    "name": "angel",
    "email": "sd@fh.com",
    "age": 26,
    "phone": "55955877"
 };
}

export function generateRestaurat(): Restaurant {
  return   { 
    'name': "DeK",
    'address': "calle 33 entre 5 y 9 #509",
    'capacity': 20,
    'clients': [generateClient()]
 };
}