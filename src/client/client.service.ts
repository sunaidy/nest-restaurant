import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateClientDto } from './dto/update-client.dto';
import { client } from './interfaces/client.interface';
import { Client } from './scheme/client.sheme';
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

  findOne(id: string): Promise<UpdateClientDto> {
    return this.clientModel.findById(id)
  }

  async update(id: string, updateClientDto: UpdateClientDto) :Promise<UpdateClientDto>{
    try{
       await this.clientModel.findByIdAndUpdate(id,updateClientDto);
       return this.findOne(id);
    } catch(error){
      throw new HttpException('Failed to update client' + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async remove(id: string): Promise<CreateClientDto> {
    try{
      return await this.clientModel.findByIdAndDelete(id);
    } catch(error){
      throw new HttpException('Failed to delete client' + error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
