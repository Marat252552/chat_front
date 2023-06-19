import MainImage from '../../entities/MainImage'
import { Message_T } from '../../shared/types'
import Time from '../Time'
import styles from './lib/styles.module.css'
import {useCallback} from 'react'


const IncomingMessage = ({ message }: { message: Message_T }) => {
    let date = new Date(message.date)

    let ref = useCallback((node: any) => {
        if(node) {
            node.scrollIntoView({smooth: true})
        }
    }, [])

    return <div className={styles.container}>
        <div ref={ref} className={styles.info_module}>
            <div className={styles.text}>
                {message.text}
                {message.src && <MainImage message={message}/>} 
            </div>
            <Time date={date} />
        </div>
    </div>
}

export default IncomingMessage