import axios from "axios"
import { preuploadFileAPI_T } from "../lib/types"

let url = import.meta.env.VITE_BACKEND_URL + '/files'

const preuploadFileAPI: preuploadFileAPI_T = async (formData: FormData) => {
    const response = await axios.post(url, formData, {headers: {
        "Content-Type": "multipart/form-data"
    }})
    return response.data.file_id
}

export default preuploadFileAPI