import MainImage from '../../entities/MainImage'
import { Message_T } from '../../shared/types'
import Time from '../Time'
import styles from './lib/styles.module.css'
import {useCallback} from 'react'


const OutcomingMessage = ({ message }: { message: Message_T }) => {

    let ref = useCallback((node: any) => {
        if(node) {
            node.scrollIntoView({smooth: true})
        }
    }, [])

    let date = new Date(message.date)
    return <div className={styles.container}>
        <div ref={ref} className={styles.info_module}>
            <Time date={date}/>
            <div className={styles.text}>
                {message.text}
                {message.src && <MainImage message={message}/>} 
            </div>
        </div>
    </div>
}

export default OutcomingMessage