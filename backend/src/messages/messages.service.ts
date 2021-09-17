import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AddMessageDto, RenderTree } from './dto/add-message-dto';
import { Messages } from './messages.model';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages) private messageRepository: typeof Messages,
  ) {}

  async getlayer(id) {
    const messages = await this.messageRepository.findAll({
      where: { parentId: id },
    });
    let layer = [];
    for (let i = 0; i < messages.length; i++) {
      const tryfind = await this.messageRepository.findAll({
        where: { parentId: messages[i].id },
      });
      if (tryfind) {
        layer.push({
          id: String(messages[i].id),
          name: String(messages[i].value),
          children: await this.getlayer(messages[i].id),
        });
      } else {
        layer.push({
          id: String(messages[i].id),
          name: String(messages[i].value),
        });
      }
    }
    return layer;
  }

  async getMessages() {
    const messages = await this.messageRepository.findAll({
      where: { parentId: 0 },
    });
    const tree: RenderTree = {
      id: 'root',
      name: 'Messages',
      children: [],
    };
    for (let i = 0; i < messages.length; i++) {
      tree.children.push({
        id: String(messages[i].id),
        name: String(messages[i].value),
        children: await this.getlayer(messages[i].id),
      });
    }
    return tree;
  }

  async addMessage(dto: AddMessageDto) {
    const message = await this.messageRepository.create(dto);
    return message;
  }
}
