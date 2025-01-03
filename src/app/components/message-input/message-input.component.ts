import { Component, Input, OnInit, inject } from '@angular/core';
import { Conversation } from '../../models/conversation';
import { ConversationService } from '../../services/conversation.service';
import { WebSocketService } from '../../services/web-socket.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent implements OnInit {

  message = ''

  conversationService: ConversationService = inject(ConversationService);

  conversation!: Conversation;
  constructor(private socketService: WebSocketService) { }

  ngOnInit(): void {
    this.conversation = this.conversationService.getConversationById(this.conversationId);
  }
  @Input() conversationId: string = '';

  sendMessage() {
    //TODO: replace with actual user ID and add validation
    this.socketService.sendMessage(this.conversationId, 'user1', this.message, this.conversation.participants);
  }

}
