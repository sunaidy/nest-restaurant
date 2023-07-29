import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClientDto } from './dto/update-client.dto';
import { client } from './interfaces/client.interface';
import { Client } from './dto/client.sheme';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { throws } from 'assert';

@Injectable()
export class ClientService {
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>) {}
  private clients: client[] = [];

  create(createClientDto: CreateClientDto) {
    try{
      const createdClient = new this.clientModel(createClientDto);
      return createdClient.save();
    } catch(error){
      throw new HttpException('Failed to create client', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  findOne(id: number) {
    return this.clients.find((obj)=>{(obj.id == id)})
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    this.clientModel.findByIdAndUpdate(id,);
    this.clients = this.clients.map((obj)=>obj.id == id ? {...obj, ...updateClientDto}:obj )
    return this.clients;
  }

 async remove(id: string): Promise<CreateClientDto> {
    try{
      return await this.clientModel.findByIdAndDelete(id);
    } catch(error){
      throw new HttpException('Failed to delete client' + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
