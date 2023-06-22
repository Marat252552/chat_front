import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./Reducers/UserReducer";
import dialogsSlice from "./Reducers/DialogsReducer";
import messagesSlice from "./Reducers/MessagesReducer";
import contactsSlice from "./Reducers/ContactsReducer";

// Создаем rootReducer
const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    dialogsReducer: dialogsSlice.reducer,
    messagesReducer: messagesSlice.reducer,
    contactsReducer: contactsSlice.reducer
})
// Создаем функцию, в которой конфигурируем redux хранилище
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
// Создаем типы, с помощью которых будем взаимодействовать с нашим хранилищем
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']