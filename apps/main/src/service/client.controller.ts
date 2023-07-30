import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, HttpException, HttpCode, HttpStatus} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateClientDto } from '../interfaces/client/dto/create-client.dto';
import { UpdateClientDto } from '../interfaces/client/dto/update-client.dto';
import { Client } from '../interfaces/client/dto/client.sheme';

@Controller("client")
export class ClientController {
  constructor( @Inject('CLIENT_SERVICE') private client: ClientProxy,) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
   
    try {
        const createUserResponse: String = await firstValueFrom(
            this.client.send({cmd:'new_client'}, createClientDto),
          );   
          return createUserResponse

    } catch (error) {
        throw new HttpException("Falied al tirar evento"+error,HttpStatus.INTERNAL_SERVER_ERROR)
    }
    
  }
  @Get()
  async findAll():Promise<Client[]>{

    try {
        const response: Client[]=await firstValueFrom(
            this.client.send({cmd:'get_clients'},'send'),
        )
        return response
    } catch (error) {
        throw new HttpException("Falied al tirar evento"+error,HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

  @Get(':id')
  async findOne(@Param('id') id: string) {

    try {
        const response: Client=await firstValueFrom(
            this.client.send({cmd:'get_client'},id),
        )
        return response
    } catch (error) {
        throw new HttpException("Falied al tirar evento"+error,HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
 
    try {
        const response: Client=await firstValueFrom(
            this.client.send({cmd:'update_client'},{id,updateClientDto}),
        )
        return response
    } catch (error) {
        throw new HttpException("Falied al tirar evento"+error,HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }
  
 
  @Delete(':id')
  async remove(@Param('id') id: string) {
 
    try {
        const response: Client=await firstValueFrom(
            this.client.send({cmd:'delete_client'},id),
        )
        return response
    } catch (error) {
        throw new HttpException("Falied al tirar evento "+ error,HttpStatus.INTERNAL_SERVER_ERROR)
    }

  }
}
