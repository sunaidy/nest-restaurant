import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Restaurant } from '../../restaurant/schema/restaurant.sheme';
import { Client } from '../../interfaces/client/dto/client.sheme';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Client' })
 // @Prop({ type: { type: SchemaFactory.createForClass(Client)} })
  client: Client;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' })
  //@Prop({ type: { type: SchemaFactory.createForClass(Restaurant)} })
  restaurant: Restaurant;
}

export const OrderSchema = SchemaFactory.createForClass(Order);