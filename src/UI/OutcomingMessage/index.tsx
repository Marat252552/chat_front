import MainText from '../../shared/Texts/MainText'
import { Message_T } from '../../shared/types'
import styles from './lib/styles.module.css'


const OutcomingMessage = ({ message }: { message: Message_T }) => {
    let date = new Date(message.date)
    return <div className={styles.container}>
        <div className={styles.info_module}>
            <div className={styles.time_module}>
                <MainText>{`${date.getHours()}:${date.getMinutes()}`}</MainText>
            </div>
            <div className={styles.text}>{message.text}</div>
        </div>
    </div>
}

export default OutcomingMessage