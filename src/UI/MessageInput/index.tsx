import { SendOutlined } from '@ant-design/icons'
import TransparentInput from '../TransparentInput'
import styles from './lib/styles.module.css'
import { useForm } from 'react-hook-form'
import { useSocket } from '../../shared/SocketProvider'
import { useAppSelector } from '../../state/hooks'
import TransparentButton from '../TransparentButton'
import sendMessage from './processes/sendMessage'

type Values_T = {
    text: string
}

const MessageInput = ({ room_id }: { room_id: string }) => {

    let socket = useSocket() as any
    let { user_id } = useAppSelector(state => state.userReducer.user)

    let { register, handleSubmit, reset } = useForm<Values_T>()

    let onSubmit = ({ text }: Values_T) => {
        sendMessage(text, socket, room_id, user_id)
        reset()
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <TransparentInput
                    {...register('text', { required: true })}
                    style={{ width: '100%' }}
                    placeholder='Введите сообщение'
                    autoComplete='off'
                />
                <div>
                    <TransparentButton>
                        <SendOutlined
                            style={{ color: 'var(--text-color)' }}
                        />
                    </TransparentButton>
                </div>

            </div>
        </form>

    </>
}

export default MessageInput