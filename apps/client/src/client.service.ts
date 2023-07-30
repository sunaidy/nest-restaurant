import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Client } from './schema/client.sheme';
import { InjectModel } from '@nestjs/mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { IclientUpdate } from './interfaces/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<Client>,

    ) {}
  async create(createClientDto: CreateClientDto) {
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

  async update(updateClientDto: IclientUpdate) :Promise<UpdateClientDto>{
    try{
       await this.clientModel.findByIdAndUpdate(updateClientDto.id, updateClientDto.updateClientDto);
       return this.findOne(updateClientDto.id);
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
