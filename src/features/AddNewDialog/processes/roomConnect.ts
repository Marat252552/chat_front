
const roomConnect = (room_id: string, user_id: string, socket: any ) => {
    let data = {
        user_id,
        room_id
    }
    socket.emit('join_room', data)
}

export default roomConnect