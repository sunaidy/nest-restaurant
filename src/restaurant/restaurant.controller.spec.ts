import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller';
import { RestaurantService } from './restaurant.service';

describe('RestaurantController', () => {
  let restaurantController: RestaurantController;
  let restaurantService: RestaurantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [RestaurantService],
    }).compile();

    restaurantService = module.get<RestaurantService>(RestaurantService);
    restaurantController = module.get<RestaurantController>(RestaurantController);
  });

  describe('create', () => {
    it('create new restaurant', async () => {
      const result = {
        id: 1,
        name: "DeK",
        address: "calle 33 entre 5 y 9 #509",
        capacity: 20,
        clients: [
          {
            "id": 1,
            "name": "angel",
            "email": "sd@fh.com",
            "age": 26,
            "phone": 55955877
         }]    
      };
      jest.spyOn(restaurantService, 'create').mockImplementation(() => result);

      expect(await restaurantController.create(result));
    });
  });
});
