import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { client } from '../client/interfaces/client.interface';
import { restaurant } from '../restaurant/interfaces/restaurant.interface';
import { OrderService } from './order.service';

describe('OrderController', () => {
  let controller: OrderController;
  let orderService: OrderService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile();
    orderService = module.get<OrderService>(OrderService);
    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('create new order', async () => {
      const result = {
        id: 1,
        description: "Aceite de coco",
        client: generateClient(),
        restaurant: generateRestaurat(),
      };
      jest.spyOn(orderService, 'create').mockImplementation(() => result);

      expect(await controller.create(result));
    });
  });
});

export function generateClient(): client {
  return   {
    "id": 1,
    "name": "angel",
    "email": "sd@fh.com",
    "age": 26,
    "phone": 55955877
 };
}

export function generateRestaurat(): restaurant {
  return   { 
    'id': 1,
    'name': "DeK",
    'address': "calle 33 entre 5 y 9 #509",
    'capacity': 20,
    'clients': [generateClient()]
 };
}