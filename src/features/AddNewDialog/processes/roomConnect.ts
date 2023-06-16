import React from 'react'
import { v4 } from 'uuid'
import { Event_T } from '../../../shared/types'

const roomConnect = (room_id: string, socket: any, user_id: string ) => {
    let data = {
        message: {
            user_id,
            event: Event_T.user_connected,
            date: new Date(),
            text: 'Новый пользователь успешно присоединился',
            room_id,
            message_id: v4()
        },
        room_id
    }
    socket.emit('join_room', data)
}

export default roomConnect