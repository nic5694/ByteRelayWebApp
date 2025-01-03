export interface Message {
    userId: string,
    message: string,
    timestamp: Date
}

export interface Conversation {
    id: string,
    participants: string[],
    messages: Array<Message>,
    createdAt: Date,
    updatedAt: Date
} 