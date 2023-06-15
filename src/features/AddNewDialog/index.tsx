import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import MainIcon from "../../shared/Icons/MainIcon"
import styles from './lib/styles.module.css'
import { useState } from 'react'
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch } from "../../state/hooks"
import { useSocket } from "../../shared/SocketProvider"
import FilledInput from "../../UI/FilledInput"
import OutlinedElement from "../../UI/OutlinedElement"


const AddNewDialogButton = () => {

    const socket = useSocket() as any

    const roomConnect = (room_id: string) => {
        socket.emit('join_room', room_id)
    }

    const { addDialog } = dialogsSlice.actions
    const dispatch = useAppDispatch()

    let [active, setActive] = useState(false)
    let [roomId, setRoomId] = useState<string>('')
    let [name, setName] = useState<string>('')

    let closeHiddenModule = () => {
        setActive(false)
        setName('')
        setRoomId('')
    }

    let AddDialog = () => {
        setActive(prev => !prev)
        if (roomId && name) {
            dispatch(addDialog({ room_id: roomId, name }))
        }
        roomConnect(roomId)
        setName('')
        setRoomId('')
    }

    return <>
        <div className={styles.button}>
            <div className={styles.container}>
                {active && <>
                    <div className={styles.hidden_module}>
                        <FilledInput
                            value={roomId}
                            onChange={(e: any) => { setRoomId(e.target.value) }}
                            placeholder="Enter unique ID"
                        />
                        <FilledInput
                            value={name}
                            onChange={(e: any) => { setName(e.target.value) }}
                            placeholder="Enter custom name"
                        />
                        <OutlinedElement
                            onClick={closeHiddenModule}
                            style={{ cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <MainIcon Component={CloseOutlined} />
                            </div>
                        </OutlinedElement>
                    </div>

                </>}
                <FilledElement
                    onClick={AddDialog}
                    style={(active) ? { backgroundColor: 'white', cursor: 'pointer' } : { cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <MainIcon Component={PlusOutlined} />
                    </div>
                </FilledElement>
            </div>

        </div>
    </>
}

export default AddNewDialogButton