import { Event_T } from '../../../shared/types'
import { v4 } from 'uuid'

const sendMessage = (text: string, socket: any, room_id: string, user_id: string) => {
    socket.emit("send_message", {
        date: new Date(),
        event: Event_T.message,
        text,
        room_id,
        user_id,
        message_id: v4()
    })
}

export default sendMessage