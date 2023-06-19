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

// export type ImageMessage_T = {
//     fileName: string,
//     mimetype: string,
//     event: Event_T.image,
//     body: any,
//     user_id: string,
//     room_id: string,
//     message_id: string,
//     date: Date
// }