import { RedoOutlined } from "@ant-design/icons"
import IconTextButton from "../../UI/Buttons/IconTextButton"
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

    return <>
        <IconTextButton
            text='Покинуть чат'
            Icon={RedoOutlined}
            onClick={leaveRoom}
        />
    </>
}

export default ClearChatButton