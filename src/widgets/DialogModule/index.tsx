import { useState } from 'react'
import MessageInput from '../../UI/MessageInput'
import ClearChatButton from '../../features/ClearChatButton'
import StarText from '../../shared/Texts/StarText'
import { Event_T } from '../../shared/types' 
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks' 
import Message from '../../entities/Message'
import { v4 } from 'uuid'
import { useSocket } from '../../shared/SocketProvider'



const DialogModule = () => {

    const socket = useSocket() as any

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { room_id, name } = currentDialog
    let { user_id } = useAppSelector(state => state.userReducer.user)
    let { messages: allMessages } = useAppSelector(state => state.messagesReducer)
    
    let messages = allMessages.filter(message => {
        return message.room_id === room_id
    })

    const [textValue, setTextValue] = useState<string>('')
    const SendMessage = () => {
        if(!textValue) return
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