import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { client } from './interfaces/client.interface';
import { ClientService } from './client.service';
import { Client } from './dto/client.sheme';

@Controller("client")
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  async create(@Body() CreateClientDto: CreateClientDto) {
    this.clientService.create(CreateClientDto);
  }

  @Get()
  async findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() UpdateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, UpdateClientDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.clientService.remove(id);
  }
}
