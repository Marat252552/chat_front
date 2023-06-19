import axios from "axios"

let url = import.meta.env.VITE_BACKEND_URL + '/files'

const preuploadFileAPI = async (formData: FormData) => {
    const response = await axios.post(url, formData, {headers: {
        "Content-Type": "multipart/form-data"
    }})
    return response
}

// const preuploadFileAPI = async (formData: FormData) => {
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//         body: formData
//     });
//     // return response.json();
// }

export default preuploadFileAPI