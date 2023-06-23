import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { Message_T } from "../../types"

type Room_T = {
    room_id: string,
    name: string
}

type getRoomsAPI_T = () => Promise<AxiosResponse<{
    rooms: Room_T[],
    messages: Message_T[]
}, any>>

const getRoomsAPI: getRoomsAPI_T = () => {
    return instanse.get('/chat/rooms')
}

export default getRoomsAPI