import { Component, inject, signal } from '@angular/core';
import { ChatComponent } from '../../components/chat/chat.component';
import { ChatService } from '../../services/chat.service';


@Component({
  selector: 'app-home',
  imports: [ChatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  chatService: ChatService = inject(ChatService);
  //remember to set back to default "0", which displays that there is no chat open
  currentOpenChatID :string;

  constructor() {
    this.currentOpenChatID = this.chatService.getChatId();
  }

  //trigger when a chat is opened
  onChatOpened(chatID: string): void {
    if (chatID === this.currentOpenChatID) {
      return;
    }
    this.chatService.updateChatID(chatID);
  }

  incrementChatID(): void{
    const numberID = parseInt(this.currentOpenChatID, 10);
    if (isNaN(numberID)) {
      throw new Error('Invalid chat ID');
    }
    this.chatService.updateChatID((numberID + 1).toString());
    this.currentOpenChatID = this.chatService.getChatId();
  }
}