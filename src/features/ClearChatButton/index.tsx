import { LogoutOutlined } from "@ant-design/icons"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import { useSocket } from "../../shared/SocketProvider"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import styles from './lib/styles.module.css'
import IconButton from "../../UI/Buttons/IconButton"


const ClearChatButton = () => {

    const socket = useSocket() as any

    let { room_id } = useAppSelector(state => state.dialogsReducer.currentDialog)

    let { removeDialog } = dialogsSlice.actions
    let dispatch = useAppDispatch()

    let leaveRoom = () => {
        if (!socket) return
        socket.emit('leave_room', room_id)
        dispatch(removeDialog(room_id))
    }

    return <>
        <div className={styles.pc_version_button}>
            <IconTextButton
                text='Покинуть чат'
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