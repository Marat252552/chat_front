import { FileImageOutlined, FileImageTwoTone, SendOutlined } from '@ant-design/icons'
import TransparentInput from '../TransparentInput'
import styles from './lib/styles.module.css'
import { useForm } from 'react-hook-form'
import { useSocket } from '../../shared/SocketProvider'
import { useAppSelector } from '../../state/hooks'
import TransparentButton from '../TransparentButtonContainer'
import sendMessage from './processes/sendMessage'
import { memo, useState } from 'react'
import { v4 } from 'uuid'
import preuploadFileAPI from './processes/preuploadFileAPI'

type Values_T = {
    text: string,
}

let CustomIcon = ({Icon}: {Icon: any}) => <Icon
    style={{ color: 'var(--text-color)', cursor: 'pointer'}}
/>

const MessageInput = memo(({ room_id }: { room_id: string }) => {

    let socket = useSocket() as any
    let { user_id } = useAppSelector(state => state.userReducer.user)

    let { register, handleSubmit, reset } = useForm<Values_T>()
    let [fileId, setFileId] = useState<string | undefined>()

    let onSubmit = ({ text }: Values_T) => {
        if (!fileId && !text) return
        sendMessage(text, socket, room_id, user_id, fileId)
        reset()
        setFileId(undefined)
    }

    let preuploadFile = (e: any) => {
        const file = e.target.files[0]
        if (!file) return
        let newFileId = v4()
        setFileId(newFileId)
        let formData = new FormData()
        formData.append('file', file)
        formData.append('file_id', newFileId)
        // formData.append('user_id', user_id)
        // formData.append('room_id', room_id)
        // formData.append('date', JSON.stringify(new Date()))
        // formData.append('user_id', user_id)
        // formData.append('event', Event_T.image)

        preuploadFileAPI(formData)
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <div className={styles.first_module}>
                    <div>
                        <input
                            className={styles.file_input}
                            onChange={preuploadFile}
                            id='file'
                            type='file'
                            name='file'
                        />
                        <label htmlFor='file'>
                            {
                                fileId ?
                                    <CustomIcon Icon={FileImageTwoTone}/>
                                    :
                                    <CustomIcon Icon={FileImageOutlined}/>
                            }

                        </label>

                    </div>

                    <TransparentInput
                        {...register('text')}
                        style={{ width: '100%' }}
                        placeholder='Введите сообщение'
                        autoComplete='off'
                    />
                </div>

                <div>
                    <TransparentButton>
                        <CustomIcon Icon={SendOutlined}/>
                    </TransparentButton>
                </div>


            </div>
        </form>

    </>
})

export default MessageInput