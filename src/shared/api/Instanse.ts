import axios from "axios";


const instanse = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

// Interceptor, устанавливающий в headers каждого запроса AccessToken
instanse.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})

// Interceptor, отлавливающий ошибку, которую вызывает отсутствие AccessToken-а, и посылающий запрос на получение новой пары токенов
instanse.interceptors.response.use((config: any) => {
    return config;
}, async (error) => {
    const OriginalRequest = error.config
    if (error.response.status === 403 && error.config && !error.config._isRetry) {
        OriginalRequest._isRetry = true
        try {
            let response = await instanse.get('/auth/refresh')
            localStorage.setItem('access_token', response.data.AccessToken)
            return instanse.request(OriginalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})

export default instanse