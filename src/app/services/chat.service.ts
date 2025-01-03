import { computed, Injectable, signal } from '@angular/core';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatId = signal('0');
  constructor() { }

  private messageList = computed(() => {
    console.log(this.chatId());
    return this.generateMockMessages();
  });

  getAllMessages(): Array<Message> {
    return this.messageList();
  }

  updateChatID(chatID: string): void {
    this.chatId.set(chatID);
  }

  getChatId(): string {
    return this.chatId();
  }

  generateMockMessages(): Array<Message> {
    const mockMessages: Message[] = [];
    
    for (let i = 0; i < 6; i++) {
      mockMessages.push({
        contents: `This is mock message number ${i + 1 + (parseInt(this.chatId(), 10))}`,
        timestamp: new Date(Date.now() - i * 1000 * 60), // Each message is 1 minute apart
        isRecipient: i % 2 === 0, // Alternate between recipient and sender
        senderID: `user_${i % 3}`, // Cycles between 3 different sender IDs
        id: `msg_${Math.random().toString(36).substring(2, 15)}` // Generate unique ID
      });
    }
    
    return mockMessages;
  }
}
