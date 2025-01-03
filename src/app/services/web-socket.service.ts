import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {io, Socket} from 'socket.io-client';
const SOCKET_URL = 'http://localhost:8080'; // update later with sevrer url using env files
@Injectable({
    providedIn: 'root'
})
export class WebSocketService {
    private socket: Socket;
    constructor() {
        this.socket = io(SOCKET_URL);
    }
    // join a conversation
    joinConversation(conversationId: string): void {
        this.socket.emit('joinConversation', conversationId);
    }
    // send a message 
    sendMessage(conversationId: string, userId: string, message: string, participants: string[]): void {
        this.socket.emit('sendMessage', {event: "sendMessage", data: {conversationId, userId, message, participants}});
    }
    // listen for incoming messages
    onReceiveMessage(): Observable<any> {
        return new Observable(observer => {
            this.socket.on('receiveMessage', (data: any) => {
                observer.next(data);
            });
        });
    }
    
    // handle errors
    onError(): Observable<any> {
        return new Observable(observer => {
            this.socket.on('error', (data: any) => {
                observer.next(data);
            });
        });
    }
    // Disconnect from the socket
    disconnect(): void {
        this.socket.disconnect();
    }
}