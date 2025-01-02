import { Injectable } from '@angular/core';
import { Conversation } from '../models/conversation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const CONVERSATIONS_URL = 'http://localhost:8080/api/v1/conversations'

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private conversations: Conversation[] = [];
  constructor(private httpClient: HttpClient) {
    this.readAllConversations();
    console.log(this.conversations);
   }

   readAllConversations(): void {
    //TODO: use real current user id
    this.httpClient.get(CONVERSATIONS_URL+ '/users/' + 'user1').subscribe(conversations => {
      this.conversations = conversations as Conversation[];
    });
   }
}
