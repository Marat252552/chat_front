import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { User_T } from "../../types"

type getUserAPI_T = (user_id: string) => Promise<AxiosResponse<{
    user: User_T
}, any>>

const getUserAPI: getUserAPI_T = (user_id: string) => {
    return instanse.get(`/chat/users/${user_id}`)
}

export default getUserAPI