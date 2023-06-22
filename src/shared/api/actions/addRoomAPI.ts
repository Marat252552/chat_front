import { AxiosResponse } from "axios"
import instanse from "../Instanse"


type data_T = {
    in_user_id: string,
    out_user_id: string
}

type addRoomAPI_T = (data: data_T) => Promise<AxiosResponse<{
    room_id: string
}, any>>


const addRoomAPI: addRoomAPI_T = (data: data_T) => {
    return instanse.post('/chat/rooms', data)
}

export default addRoomAPI