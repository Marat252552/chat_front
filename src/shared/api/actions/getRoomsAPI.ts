import { AxiosResponse } from "axios"
import instanse from "../Instanse"

type Room_T = {
    room_id: string,
    name: string
}

type getRoomsAPI_T = () => Promise<AxiosResponse<{
    rooms: Room_T[]
}, any>>

const getRoomsAPI: getRoomsAPI_T = () => {
    return instanse.get('/chat/rooms')
}

export default getRoomsAPI