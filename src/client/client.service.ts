import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { client } from './interfaces/client.interface';

@Injectable()
export class ClientService {
  private clients: client[] = [];

  create(client: client) {
    this.clients.push(client);
  }

  findAll(): client[] {
    return this.clients;
  }

  findOne(id: number) {
    return this.clients.find((obj)=>{(obj.id == id)})
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    this.clients = this.clients.map((obj)=>obj.id == id ? {...obj, ...updateClientDto}:obj )
    return this.clients;
  }

  remove(id: number) {
    this.clients = this.clients.filter((obj)=> {return obj.id != id })
    return this.clients;
  }
}
