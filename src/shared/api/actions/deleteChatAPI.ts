import instanse from "../Instanse"



const deleteChatAPI = (room_id: string) => {
    return instanse.delete(`/chat/rooms/${room_id}`)
}

export default deleteChatAPI