import { Injectable, Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Client, ClientDocument, ClientSchema } from './schema/client.sheme';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://root:root@127.0.0.1:27017/test?authSource=admin"),
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})

@Injectable()
export class ClientModule {
  constructor(@InjectModel(Client.name) private clientModel: Model<ClientDocument>) {}
}
