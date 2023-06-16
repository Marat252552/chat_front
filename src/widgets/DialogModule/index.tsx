import MessageInput from '../../UI/MessageInput'
import ClearChatButton from '../../features/ClearChatButton'
import StarText from '../../shared/Texts/StarText'
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks'
import Message from '../../entities/Message'



const DialogModule = () => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { room_id, name } = currentDialog
    let { messages: allMessages } = useAppSelector(state => state.messagesReducer)

    let messages = allMessages.filter(message => {
        return message.room_id === room_id
    })

    return <div className={styles.container}>
        <div className={styles.header_module}>
            <StarText>{name || `Room's name`}</StarText>
            <ClearChatButton />
        </div>

        <div className={styles.chat_module_container}>
            <div className={styles.chat_module}>
                <div className={styles.messages_module}>

                    {messages.map(message => {
                        return <Message key={message.message_id} message={message} />
                    })}

                </div>
                <MessageInput room_id={room_id} />
            </div>
        </div>

    </div>
}

export default DialogModule