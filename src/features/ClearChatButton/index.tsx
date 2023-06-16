import { RedoOutlined } from "@ant-design/icons"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"
import MainButton from "../../UI/Buttons/MainButton"
import { useSocket } from "../../shared/SocketProvider"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import MiddleText from "../../shared/Texts/MiddleText"


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

    return <div>
        <MainButton onClick={leaveRoom}>
            <div className={styles.container}>
                <MainIcon Component={RedoOutlined} />
                <MiddleText>Покинуть чат</MiddleText>
            </div>
        </MainButton>
    </div>

}

export default ClearChatButton