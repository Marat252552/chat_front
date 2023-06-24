import { SendOutlined } from '@ant-design/icons'
import styles from './lib/styles.module.css'
import { useForm } from 'react-hook-form'
import { useSocket } from '../../shared/SocketProvider'
import { useAppSelector } from '../../state/hooks'
import TransparentButton from '../TransparentButtonContainer'
import sendMessage from './processes/sendMessage'
import { memo, useState } from 'react'
import preuploadFileAPI from './processes/preuploadFileAPI'
import CustomIcon from './elements/CustomIcon'
import ImageAndTextInputs from './elements/ImageAndTextInputs'
import { Values_T } from './lib/types'


const MessageInput = memo(({ room_id }: { room_id: string }) => {

    let socket = useSocket() as any
    let { user_id } = useAppSelector(state => state.userReducer.user)

    let { register, handleSubmit, reset } = useForm<Values_T>()
    let [fileId, setFileId] = useState<string | undefined>()
    let [fileLoading, setFileLoading] = useState(false)

    let onSubmit = ({ text }: Values_T) => {
        console.log(text, user_id)
        if (!fileId && !text || !user_id) return
        sendMessage(text, socket, room_id, user_id, fileId)
        reset()
        setFileId(undefined)
    }

    let preuploadFile = async (e: any) => {
        setFileLoading(true)
        try {
            const file = e.target.files[0]
            if (!file) return
            let formData = new FormData()
            formData.append('file', file)
            let file_id: string = await preuploadFileAPI(formData)
            setFileId(file_id)
        } catch(e) {
            console.log(e)
        } finally {
            setFileLoading(false)
        }
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                
                <ImageAndTextInputs
                    fileId={fileId}
                    fileLoading={fileLoading}
                    preuploadFile={preuploadFile}
                    register={register}
                />

                <div>
                    <TransparentButton>
                        <CustomIcon Icon={SendOutlined} />
                    </TransparentButton>
                </div>

            </div>
        </form>

    </>
})

export default MessageInput