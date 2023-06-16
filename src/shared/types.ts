export enum Event_T {
    user_connected = 'user_connected',
    message = 'message'
}

export type Dialog_T = {
    room_id: string,
    name: string
}

export type Message_T = {
    message_id: string,
    event: Event_T,
    text: string,
    date: Date,
    username?: string,
    room_id: string,
    user_id: string
}