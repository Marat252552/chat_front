import ClearChatButton from '../../../../features/ClearChatButton'
import StarText from '../../../../shared/Texts/StarText'
import styles from './lib/styles.module.css'


const DialogModule = () => {
    return <div className={styles.container}>
        <div className={styles.header}>
            <StarText>Jack Spencer</StarText>
            <ClearChatButton />
        </div>
    </div>
}

export default DialogModule