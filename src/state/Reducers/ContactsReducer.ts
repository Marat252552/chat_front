import {PayloadAction, createSlice} from '@reduxjs/toolkit'

export type Contact_T = {
    in_user_id: string
}

type initialState_T = {
    contacts: Contact_T[],
}

let initialState: initialState_T = {
    contacts: [],
}
// Создаем slice
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action: PayloadAction<Contact_T>) {
            let newContact = action.payload
            state.contacts = state.contacts.filter(contact => contact.in_user_id !== newContact.in_user_id)
            state.contacts.push(newContact)
        }
    }
})

export default contactsSlice