import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import Dialog from '../../entities/Dialog'
import { Dialog_T, Message_T } from '../../shared/types'



type initialState_T = {
    dialogs: Dialog_T[],
    currentDialog: Dialog_T 
}

let initialState: initialState_T = {
    dialogs: [],
    currentDialog: {name: '', room_id: ''}
}
// Создаем slice
const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        addDialog(state, action: PayloadAction<Dialog_T>) {
            state.dialogs.push(action.payload)
        },
        setCurrentRoomId(state, action: PayloadAction<Dialog_T>) {
            state.currentDialog = action.payload
        }
    }
})

export default dialogsSlice