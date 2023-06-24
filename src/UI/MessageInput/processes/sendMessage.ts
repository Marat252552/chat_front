import { Event_T } from '../../../shared/types'

const sendMessage = (text: string, socket: any, room_id: string, user_id: string, fileId?: string) => {
    socket.emit("send_message", {
        event: Event_T.message,
        text,
        room_id,
        user_id,
        fileId,
    })
    console.log('send message emitted')
}

export default sendMessage