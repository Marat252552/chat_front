import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type User_T = {
    name: string,
    id: string
}

type initialState_T = {
    user: User_T
}

let initialState: initialState_T = {
    user: {
        name: '',
        id: ''
    }
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_name(state, action: PayloadAction<string>) {
            state.user.name = action.payload
        },
        setUserId(state, action: PayloadAction<string>) {
            state.user.id = action.payload
        }
    }
})

export default userSlice