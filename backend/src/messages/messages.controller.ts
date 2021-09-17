import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AddMessageDto } from './dto/add-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() dto: AddMessageDto) {
    return this.messageService.addMessage(dto);
  }

  @Get()
  getMessages() {
    return this.messageService.getMessages();
  }
}
