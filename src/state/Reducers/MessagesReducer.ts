import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { Message_T } from '../../shared/types'



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
            state.messages = state.messages.filter(message => message._id !== action.payload._id)
            state.messages.push(action.payload)
        },
        resetMessagesState(state) {
            state.messages = []
        },
        loadMessagesBundle(state, action: PayloadAction<Message_T[]>) {
            console.log(action.payload)
            state.messages = action.payload
        }
    }
})

export default messagesSlice