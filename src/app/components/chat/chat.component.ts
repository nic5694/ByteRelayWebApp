import { Component, Input, booleanAttribute, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../models/message';
import { MessageComponent } from '../message/message.component';
import { ChatRoomHeaderComponent } from '../chat-room-header/chat-room-header.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, MessageComponent, ChatRoomHeaderComponent, MessageInputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  chatService: ChatService = inject(ChatService);
  messages = computed(() => this.generateMockMessages());

  constructor() {
    
  }

  generateMockMessages(): Array<Message> {
    const mockMessages: Message[] = [];
    
    for (let i = 0; i < 6; i++) {
      mockMessages.push({
        contents: `This is mock message number ${i + 1 + (parseInt(this.chatService.getChatId(), 10))}`,
        timestamp: new Date(Date.now() - i * 1000 * 60), // Each message is 1 minute apart
        isRecipient: i % 2 === 0, // Alternate between recipient and sender
        senderID: `user_${i % 3}`, // Cycles between 3 different sender IDs
        id: `msg_${Math.random().toString(36).substring(2, 15)}` // Generate unique ID
      });
    }
    
    return mockMessages;
  }

  }
