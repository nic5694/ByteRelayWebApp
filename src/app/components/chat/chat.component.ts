import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { SocketService } from "../../services/socket.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-chat",
  imports: [CommonModule, FormsModule],
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit, OnDestroy {
  conversationId: string = "user1_user2";
  userId: string = "user1";
  participants: string[] = ["user1", "user2"]; // List of participants
  message: string = "";
  messages: any[] = [];

  private messageSubscription: Subscription = new Subscription();

  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.joinConversation(this.conversationId);

    // Listen for incoming messages
    this.messageSubscription = this.socketService
      .onReceiveMessage()
      .subscribe((data: any) => {
        this.messages.push(data);
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the message subscription
    this.messageSubscription.unsubscribe();
  }

  // Send a message
  sendMessage(): void {
    if (this.message.trim()) {
      this.socketService.sendMessage(
        this.conversationId,
        this.userId,
        this.message,
        this.participants
      );
      this.message = "";
    }
  }
}
