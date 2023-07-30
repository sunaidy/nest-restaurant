
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Min, min } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  @Min(19, { message: 'The age must be greater than or equal to 19' })
  age: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

