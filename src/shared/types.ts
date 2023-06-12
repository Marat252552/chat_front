export enum Event_T {
    connection = 'connection',
    message = 'message'
}

export type Message_T = {
    event: Event_T,
    text: string,
    date: Date,
    username: string
}