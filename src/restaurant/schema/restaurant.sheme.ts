import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Client } from '../../client/schema/client.sheme';

export type RestauratDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  capacity: number;
  
  @Prop({ type: [{ type: SchemaFactory.createForClass(Client) }] })
  clients: Client[];
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);