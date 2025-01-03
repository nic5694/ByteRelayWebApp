export interface Message {
    contents: string;
    timestamp: Date;
    isRecipient: boolean;
    senderID: string;
    id: string;
}