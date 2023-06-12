import {PayloadAction, createSlice} from '@reduxjs/toolkit'

type User_T = {
    name: string
}

type initialState_T = {
    user: User_T
}

let initialState: initialState_T = {
    user: {
        name: ''
    }
}
// Создаем slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        set_name(state, action: PayloadAction<string>) {
            state.user.name = action.payload
        }
    }
})

export default userSlice