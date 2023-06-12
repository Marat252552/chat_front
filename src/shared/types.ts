export enum Event_T {
    connection = 'connection',
    message = 'message'
}

export type Dialog_T = {
    room_id: string,
    name: string
}

export type Message_T = {
    event: Event_T,
    text: string,
    date: Date,
    username: string,
    room_id: string,
    user_id: string
}