import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';

describe('ClientController', () => {
  let clientController: ClientController;
  let clientService: ClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [ClientService],
    }).compile();

    clientService = module.get<ClientService>(ClientService);
    clientController = module.get<ClientController>(ClientController);
  });

  describe('create', () => {
    it('create new client', async () => {
      const result = {
        "id": 1,
        "name": "angel",
        "email": "sd@fh.com",
        "age": 26,
        "phone": 55955877
    };
      jest.spyOn(clientService, 'create').mockImplementation(() => result);

      expect(await clientController.create(result));
    });
  });
});
