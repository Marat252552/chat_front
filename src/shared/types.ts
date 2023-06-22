export enum Event_T {
    user_connected = 'user_connected',
    message = 'message',
    image = 'image'
}

export type Dialog_T = {
    room_id: string,
    name: string
}

export type Message_T = {
    message_id: string,
    event: Event_T,
    room_id: string,
    user_id: string,
    date: Date,
    text?: string,
    src?: string
}

export type Room_T = {
    _id: string,
    personal: boolean,
    members_ids: string[]
}

export type User_T = {
    login: string,
    user_id: string
}