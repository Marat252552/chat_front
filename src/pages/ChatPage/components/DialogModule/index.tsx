import MessageInput from '../../../../UI/MessageInput'
import ClearChatButton from '../../../../features/ClearChatButton'
import StarText from '../../../../shared/Texts/StarText'
import styles from './lib/styles.module.css'


const DialogModule = () => {
    return <div className={styles.container}>
        <div className={styles.header_module}>
            <StarText>Jack Spencer</StarText>
            <ClearChatButton />
        </div>

        <div className={styles.chat_module_container}>
            <div className={styles.chat_module}>
                <div className={styles.messages_module}>
                    
                </div>
                <MessageInput />
            </div>
        </div>

    </div>
}

export default DialogModule