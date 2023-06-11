import { SendOutlined } from '@ant-design/icons'
import TransparentInput from '../TransparentInput'
import styles from './lib/styles.module.css'


const MessageInput = () => {
    return <>
        <div className={styles.container}>
            <TransparentInput 
                placeholder='Enter your message'
            />
            <SendOutlined style={{color: 'var(--text-color)'}}/>
        </div>
    </>
}

export default MessageInput