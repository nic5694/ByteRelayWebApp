export interface SocketMessage {
    conversationId: string;
    userId: string;
    message: string;
    timestamp: Date;
}