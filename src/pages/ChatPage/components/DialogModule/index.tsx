import { useState, useRef, useEffect } from 'react'
import MessageInput from '../../../../UI/MessageInput'
import ClearChatButton from '../../../../features/ClearChatButton'
import StarText from '../../../../shared/Texts/StarText'
import { Event_T, Message_T } from '../../../../shared/types'
import styles from './lib/styles.module.css'
import { useAppDispatch, useAppSelector } from '../../../../state/hooks'
import Message from '../../../../entities/Message'
import { connect } from 'socket.io-client'
import dialogsSlice from '../../../../state/Reducers/DialogsReducer'
import messagesSlice from '../../../../state/Reducers/MessagesReducer'
import useLocalStorage from '../../../../shared/hooks/useLocalStorage'
import { v4 } from 'uuid'
import userSlice from '../../../../state/Reducers/UserReducer'



const DialogModule = () => {

    const [user_id, setId] = useLocalStorage('id', v4())
    let dispatch = useAppDispatch()
    let { setUserId } = userSlice.actions
    useEffect(() => {
        if (user_id) {
            dispatch(setUserId(user_id))
        }
    }, [user_id])

    let socket = connect("http://localhost:3000", {
        query: { user_id }
    })

    let { room_id, name } = useAppSelector(state => state.dialogsReducer.currentDialog)

    let { addMessage } = messagesSlice.actions
    useEffect(() => {
        socket.emit("join_room", room_id)
        socket.on("receive_message", (message) => {
            dispatch(addMessage(message))
        })
    }, [room_id])

    let { messages: allMessages } = useAppSelector(state => state.messagesReducer)

    let messages = allMessages.filter(message => {
        return message.room_id === room_id
    })

    const [textValue, setTextValue] = useState<string>('')
    const SendMessage = () => {
        socket.emit("send_message", {
            date: new Date(),
            event: Event_T.message,
            text: textValue,
            room_id,
            user_id,
            message_id: v4()
        })
        setTextValue('')
    }

    return <div className={styles.container}>
        <div className={styles.header_module}>
            <StarText>{name || `Room's name`}</StarText>
            <ClearChatButton />
        </div>
        <StarText>
            Your id is {user_id}
        </StarText>

        <div className={styles.chat_module_container}>
            <div className={styles.chat_module}>
                <div className={styles.messages_module}>

                    {messages.map(message => {
                        return <Message message={message} />
                    })}

                </div>
                <MessageInput
                    send={SendMessage}
                    setValue={setTextValue}
                    value={textValue}
                />
            </div>
        </div>

    </div>
}

export default DialogModule