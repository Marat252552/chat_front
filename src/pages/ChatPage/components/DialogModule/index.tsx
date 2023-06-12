import { useState, useRef, useEffect } from 'react'
import MessageInput from '../../../../UI/MessageInput'
import ClearChatButton from '../../../../features/ClearChatButton'
import StarText from '../../../../shared/Texts/StarText'
import { Event_T, Message_T } from '../../../../shared/types'
import styles from './lib/styles.module.css'
import { useAppSelector } from '../../../../state/hooks'
import Message from '../../../../entities/Message'
import {connect} from 'socket.io-client'

const socket = connect("http://localhost:3000")

const DialogModule = () => {

    let [messages, setMessages] = useState<Message_T[]>([])

    let {name} = useAppSelector(state => state.userReducer.user)

    // const [connected, setConnected] = useState(false)
    // const [username, setUsername] = useState<string | undefined>()
    const [textValue, setTextValue] = useState<string>('')

    const ws_url = 'ws://localhost:3000'

    const SendMessage = () => {
        socket.emit("send_message", {message: textValue})
        setTextValue('')
    }

    useEffect(() => {
        socket.on("recieve_message", (response) => {
            
        })
    }, [socket])

    return <div className={styles.container}>
        <div className={styles.header_module}>
            <StarText>Jack Spencer</StarText>
            <ClearChatButton />
        </div>

        <div className={styles.chat_module_container}>
            <div className={styles.chat_module}>
                <div className={styles.messages_module}>

                    {messages.map(message => {
                        return <Message message={message}/>
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