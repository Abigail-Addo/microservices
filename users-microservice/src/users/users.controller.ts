import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class UsersController {
  @MessagePattern({ cmd: 'getPayments' })
  getPayments(@Payload() data: any) {
    console.log(data);
    return data;
  }
}