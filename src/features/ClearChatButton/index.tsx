import { RedoOutlined } from "@ant-design/icons"
import MainText from "../../shared/Texts/MainText"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"
import MainButton from "../../UI/Buttons/MainButton"
import { useSocket } from "../../shared/SocketProvider"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch, useAppSelector } from "../../state/hooks"


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

    return <div onClick={leaveRoom}>
        <MainButton>
            <div className={styles.container}>
                <MainIcon Component={RedoOutlined} />
                <MainText>Leave chat</MainText>
            </div>
        </MainButton>
    </div>

}

export default ClearChatButton