import { LogoutOutlined } from "@ant-design/icons"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import { useSocket } from "../../shared/SocketProvider"
import { useAppSelector } from "../../state/hooks"
import styles from './lib/styles.module.css'
import IconButton from "../../UI/Buttons/IconButton"
import {message} from 'antd'


const ClearChatButton = () => {

    const socket = useSocket() as any

    let { room_id } = useAppSelector(state => state.dialogsReducer.currentDialog)

    let leaveRoom = async () => {
        if (!socket) return
        try {
            socket.emit('delete_room', room_id)
        } catch(e: any) {
            const message_info = e.response.data.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        }
    }

    return <>
        <div className={styles.pc_version_button}>
            <IconTextButton
                text='Удалить и заблокировать'
                Icon={LogoutOutlined}
                onClick={leaveRoom}
            />
        </div>
        <div className={styles.mobile_version_button}>
            <IconButton
                onClick={leaveRoom}
                Icon={LogoutOutlined}
            />
        </div>
    </>
}

export default ClearChatButton