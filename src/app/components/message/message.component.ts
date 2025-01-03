import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() contents: string = '';

  @Input({ transform: booleanAttribute }) isRecipient: boolean = false;

}
