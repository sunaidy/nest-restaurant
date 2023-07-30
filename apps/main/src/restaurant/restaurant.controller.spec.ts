import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';
import { getModelToken } from '@nestjs/mongoose';
import { Restaurant } from './schema/restaurant.sheme';

describe('RestaurantController', () => {
  let restaurantController: RestaurantController;
  let restaurantService: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [
        RestaurantService,
        { provide: getModelToken(Restaurant.name), useValue: jest.fn() }
      ],
    }).compile();

    restaurantService = module.get<RestaurantService>(RestaurantService);
    restaurantController = module.get<RestaurantController>(RestaurantController);
  });

  describe('findAll', () => {
    it('return lis of restaurants', async () => {
      jest.spyOn(restaurantService, 'findAll').mockImplementation();

      expect(await restaurantController.findAll());
    });
  });
});

