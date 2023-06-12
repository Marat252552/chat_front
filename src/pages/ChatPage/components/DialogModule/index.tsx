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
import { socket } from '../..'



const DialogModule = () => {

    let { room_id, name } = useAppSelector(state => state.dialogsReducer.currentDialog)
    useEffect(() => {
        socket.emit("join_room", room_id)
        console.log('connected to ')
    }, [room_id])

    let { messages: allMessages } = useAppSelector(state => state.messagesReducer)
    let [messages, setMessages] = useState<Message_T[]>([])

    useEffect(() => {
        let requiredMessages = allMessages.filter(message => {
            return message.room_id === room_id
        })
        console.log(requiredMessages)
        setMessages(requiredMessages)
    }, [allMessages])

    const [textValue, setTextValue] = useState<string>('')
    const SendMessage = () => {
        socket.emit("send_message", {
            message: {
                date: new Date(),
                event: Event_T.message,
                text: textValue,
                room_id: room_id
            }
        })
        setTextValue('')
    }

    let dispatch = useAppDispatch()
    let { addMessage } = messagesSlice.actions

    useEffect(() => {
        socket.on("recieve_message", (response) => {
            let message = response.data.message
            console.log(message)
            dispatch(addMessage(message))
        })
    }, [socket])

    return <div className={styles.container}>
        <div className={styles.header_module}>
            <StarText>{name || `Room's name`}</StarText>
            <ClearChatButton />
        </div>

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