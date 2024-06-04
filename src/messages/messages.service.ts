import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repo"

@Injectable() // Registering this class in the DI container
export class MessagesService {
    // messagesRepository: MessagesRepository;

    // constructor() {
    //     //! This is not advisable on real APPS.
    //     this.messagesRepository = new MessagesRepository(); // This is direct dependency. Meaning this service is dependent on the repository.
    // }

    constructor(public messagesRepository: MessagesRepository){}

    findOne(id: string) {
        return this.messagesRepository.findOne(id);
    }

    findAll() {
        return this.messagesRepository.findAll();
    }

    create(content: string) {
        return this.messagesRepository.create(content);
    }
}