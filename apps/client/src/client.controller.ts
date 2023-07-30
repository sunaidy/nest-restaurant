import { Controller, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateClientDto } from './dto/create-client.dto';
import { Observable } from 'rxjs';
import { UpdateClientDto } from './dto/update-client.dto';
import { IclientUpdate } from './interfaces/client.interface';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  
  @MessagePattern({cmd: 'new_client'})
  async handleClientCreated(createClientDto: CreateClientDto) {
    return await this.clientService.create(createClientDto)
  }

  @MessagePattern({cmd: 'get_clients'})
  async findAll(createClientDto: string){
    console.log(createClientDto)
    return this.clientService.findAll();
  }

  @MessagePattern({cmd: 'get_client'})
  async findOne(id: string){
    return this.clientService.findOne(id);
  }

  @MessagePattern({cmd: 'update_client'})
  async update(updateClient: IclientUpdate){
    return this.clientService.update(updateClient);
  }

  @MessagePattern({cmd: 'delete_client'})
  async remove(id: string){
    return this.clientService.remove(id);
  }
}
