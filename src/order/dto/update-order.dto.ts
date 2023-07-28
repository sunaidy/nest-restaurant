import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrdenDto) {}
