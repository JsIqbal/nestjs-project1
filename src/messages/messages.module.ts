import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repo';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService] // Things that can be used as dependencies for other classes.
})
export class MessagesModule {}
