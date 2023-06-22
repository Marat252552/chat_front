import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type User_T = {
    login: string | undefined,
    user_id: string | undefined
}

type initialState_T = {
    user: User_T,
    is_connected: boolean
}

let initialState: initialState_T = {
    user: {
        login: undefined,
        user_id: undefined
    },
    is_connected: false
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{login: string, user_id: string}>) {
            state.user = action.payload
        },
        setConnection(state, action: PayloadAction<boolean>) {
            state.is_connected = action.payload
        },
        resetUserState(state) {
            state.user = {login: undefined, user_id: undefined}
        }
    }
})

export default userSlice