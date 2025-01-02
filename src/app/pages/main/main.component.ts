import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ConversationService } from '../../services/conversation.service';


@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: []
})
export class MainComponent {
  conversationService: ConversationService = inject(ConversationService);
}
