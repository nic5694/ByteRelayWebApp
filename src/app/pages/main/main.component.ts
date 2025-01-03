import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: []
})
export class MainComponent /*implements OnDestroy*/{
  // websocketService: WebSocketService = inject(WebSocketService);
  // ngOnDestroy(): void {
  //   this.websocketService.disconnect();
  // }
}
