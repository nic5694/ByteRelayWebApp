import { Component, inject, signal } from '@angular/core';
import { ChatComponent } from '../../components/chat/chat.component';
import { ConversationService } from '../../services/conversation.service';
import { Conversation } from '../../models/conversation';

@Component({
  selector: 'app-home',
  imports: [ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //remember to set back to default "0", which displays that there is no chat open
  currentOpenChatID = signal('user1_user2');
  conversationService: ConversationService = inject(ConversationService);
  conversations = signal<Conversation[]>([]);

  constructor() {
    this.conversations.set(this.conversationService.getAllConversations());
  }

  //trigger when a chat is opened
  onChatOpened(chatID: string): void {
    if (chatID === this.currentOpenChatID()) {
      return;
    }
    this.currentOpenChatID.set(chatID);
  }

  switchChatuser1_user2(): void {
    this.currentOpenChatID.set('user1_user2');
  }

  switchChatuser1_user3(): void {
    this.currentOpenChatID.set('user1_user3');
  }
}