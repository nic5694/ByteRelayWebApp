import { computed, Injectable, signal } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatId = signal('0');
  constructor() { }

  updateChatID(chatID: string): void {
    this.chatId.set(chatID);
  }

  getChatId(): string {
    return this.chatId();
  }
}
