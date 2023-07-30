import { Test, TestingModule } from '@nestjs/testing';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { getModelToken } from '@nestjs/mongoose';
import { Client } from './schema/client.sheme';

describe('ClientController', () => {
  let clientController: ClientController;
  let clientService: ClientService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
      providers: [
        ClientService,
        { provide: getModelToken(Client.name), useValue: jest.fn() }
      ],
    }).compile();

    clientController = app.get<ClientController>(ClientController);
    clientService = app.get<ClientService>(ClientService);
  });

  describe('findAll', () => {
    it('get all clients', async () => {
      jest.spyOn(clientService, 'findAll').mockImplementation();
      expect(await clientService.findAll());
    });
  });
});
