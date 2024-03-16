import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return "hello motor!";
  }

  @Post()
  createMessage(content: string) {

  }
  
  @Get("/:id")
  getMessage() {

  }
}
