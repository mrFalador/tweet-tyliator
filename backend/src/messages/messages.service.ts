import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddMessageDto } from './dto/add-message-dto';
import { Messages } from './messages.model';

@Injectable()
export class MessagesService {

    constructor(@InjectModel(Messages) private messageRepository: typeof Messages) {}

    async getMessages() {
        const messages = await this.messageRepository.findAll();
        return messages
    }
    
    async addMessage(dto: AddMessageDto) {
        const message = await this.messageRepository.create(dto);
        return message
    }
}
