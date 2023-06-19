import MessageInput from '../../UI/MessageInput'
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../state/hooks'
import Message from '../../entities/Message'
import HeaderModule from './elements/HeaderModule'


const DialogModule = ({ setNavbarActive }: { setNavbarActive: React.Dispatch<React.SetStateAction<boolean>> }) => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { room_id, name } = currentDialog
    let { messages: allMessages } = useAppSelector(state => state.messagesReducer)

    let messages = allMessages.filter(message => {
        return message.room_id === room_id
    })


    return <div className={styles.container}>

        <HeaderModule setNavbarActive={setNavbarActive} name={name} />

        <div className={styles.chat_module_container}>
            <div className={styles.chat_module}>
                <div className={styles.messages_module}>
                    {messages.map(message => (
                        <Message key={message.message_id} message={message} />
                    ))}
                </div>
                {/* <div style={{ border: 'solid 1px red', height: '100%' }}> */}
                <MessageInput room_id={room_id} />
                {/* </div> */}
            </div>
        </div>

    </div>
}

export default DialogModule