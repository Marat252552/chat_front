import { AxiosResponse } from "axios"
import instanse from "../Instanse"

type member_T = {
    login: string,
    user_id: string
}

type getRoomMembersAPI_T = (room_id: string) => Promise<AxiosResponse<{
    room_members: member_T[]
}, any>>

const getRoomMembersAPI: getRoomMembersAPI_T = (room_id: string) => {
    return instanse.get(`/chat/room_members/${room_id}`)
}

export default getRoomMembersAPI