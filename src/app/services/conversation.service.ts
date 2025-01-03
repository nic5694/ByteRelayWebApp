import { inject, Injectable, signal } from '@angular/core';
import { Conversation } from '../models/conversation';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/conversation';
import { SocketMessage } from '../models/web_socket';

const CONVERSATIONS_URL = 'http://localhost:8080/api/v1/conversations'

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private conversations = signal<Conversation[]>([]);
  constructor(private httpClient: HttpClient) {
    this.readAllConversations();
   }

   private readAllConversations(): void {
    //TODO: use real current user id
    this.httpClient.get(CONVERSATIONS_URL+ '/users/' + 'user1').subscribe(conversations => {
      this.conversations.set(conversations as Conversation[]);
    });
   }

   getAllConversations(): Conversation[] {
    return this.conversations();
   }

   receiveMessage(message: SocketMessage): void {
      const conversation = this.getConversationById(message.conversationId);
      let parsedMessage = {userId: message.userId, message: message.message, timestamp: new Date()};
      conversation.messages.push(parsedMessage);
   }

   getConversationById(conversationId: string): Conversation {
     return this.conversations().find(conversation => conversation.id === conversationId)!;
   }
}
