import { SendOutlined } from '@ant-design/icons'
import TransparentInput from '../TransparentInput'
import styles from './lib/styles.module.css'


const MessageInput = ({value, setValue, send}: {value: string, setValue: any, send: any}) => {
    return <>
        <div className={styles.container}>
            <TransparentInput
                value={value}
                onChange={(e: any) => {setValue(e.target.value)}}
                placeholder='Введите сообщение'
            />
            <SendOutlined 
            onClick={send}
            style={{color: 'var(--text-color)'}}
            />
        </div>
    </>
}

export default MessageInput