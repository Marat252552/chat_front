import { Message_T } from '../../shared/types'
import Time from '../Time'
import styles from './lib/styles.module.css'


const OutcomingMessage = ({ message }: { message: Message_T }) => {
    let date = new Date(message.date)
    return <div className={styles.container}>
        <div className={styles.info_module}>
            <Time date={date}/>
            <div className={styles.text}>
                {message.text}
            </div>
        </div>
    </div>
}

export default OutcomingMessage