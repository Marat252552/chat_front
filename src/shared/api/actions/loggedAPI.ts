import { AxiosResponse } from "axios"
import instanse from "../Instanse"
import { User_T } from "../../../state/Reducers/UserReducer"


type loggedAPI_T = () => Promise<AxiosResponse<{user: {
    user_id: string,
    login: string
}}>>

const loggedAPI: loggedAPI_T = () => {
    return instanse.get('/auth/logged')
}

export default loggedAPI