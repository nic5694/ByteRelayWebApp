import { Component, Input, booleanAttribute, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @Input() contents: string = '';

  @Input() userId: string = '';

  isRecipient = computed(() => this.userId === 'user1');

}
