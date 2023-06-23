import instanse from "../Instanse"



const getChatMessagesAPI = (room_id: string) => {
    return instanse.get(`/chat/messages/${room_id}`)
}

export default getChatMessagesAPI