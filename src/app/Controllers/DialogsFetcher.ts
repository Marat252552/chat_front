import { message } from "antd"
import { useEffect } from "react"
import getRoomsAPI from "../../shared/api/actions/getRoomsAPI"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import messagesSlice from "../../state/Reducers/MessagesReducer"
import { useAppDispatch, useAppSelector } from "../../state/hooks"


const DialogsFetcher = ({ children }: { children: any }) => {

    const { loadDialogsBundle } = dialogsSlice.actions
    const { loadMessagesBundle } = messagesSlice.actions
    const dispatch = useAppDispatch()

    const { user_id } = useAppSelector(state => state.userReducer.user)

    let fetchDialogsAndMessages = async () => {
        try {
            const { data: dialogs_data } = await getRoomsAPI()
            const { rooms, messages } = dialogs_data

            dispatch(loadDialogsBundle(rooms))
            dispatch(loadMessagesBundle(messages))
        } catch (e: any) {
            const message_info = e.response.data.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        }
    }

    useEffect(() => {
        if (!user_id) return
        fetchDialogsAndMessages()
    }, [user_id])

    return children
}

export default DialogsFetcher