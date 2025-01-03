import { Component, Input, computed, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from '../message/message.component';
import { ChatRoomHeaderComponent } from '../chat-room-header/chat-room-header.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { WebSocketService } from '../../services/web-socket.service';
import { ConversationService } from '../../services/conversation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, MessageComponent, ChatRoomHeaderComponent, MessageInputComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnDestroy {
  @Input() conversationId: string = '';
  conversationService: ConversationService = inject(ConversationService);
  messages = computed(() => this.conversationService.getConversationById(this.conversationId).messages);
  
  private messageSubscription: Subscription = new Subscription();

  constructor(private socketService: WebSocketService) { }
  ngOnInit(): void {
    this.socketService.joinConversation(this.conversationId);

    this.messageSubscription = this.socketService
      .onReceiveMessage()
      .subscribe((data: any) => {
        this.conversationService.receiveMessage(data);
      });
  }
  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }
}
