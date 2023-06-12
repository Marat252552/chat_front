import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import Dialog from '../../entities/Dialog'
import { Dialog_T, Message_T } from '../../shared/types'



type initialState_T = {
    messages: Message_T[]
}

let initialState: initialState_T = {
    messages: []
}
// Создаем slice
const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<Message_T>) {
            state.messages.push(action.payload)
        }
    }
})

export default messagesSlice