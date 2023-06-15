import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import MainIcon from "../../shared/Icons/MainIcon"
import styles from './lib/styles.module.css'
import { useState } from 'react'
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch } from "../../state/hooks"
import { useSocket } from "../../shared/SocketProvider"


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
                        <input
                            value={roomId}
                            onChange={(e) => { setRoomId(e.target.value) }}
                            placeholder="Enter unique ID"
                        />
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder="Enter custom name"
                        />
                        <FilledElement
                            onClick={closeHiddenModule}
                            style={{ backgroundColor: 'var(--danger-color)', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <MainIcon Component={CloseOutlined} />
                            </div>
                        </FilledElement>
                    </div>

                </>}
                <FilledElement
                    onClick={AddDialog}
                    style={(active) ? { backgroundColor: 'var(--success-color)', cursor: 'pointer' } : { cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <MainIcon Component={PlusOutlined} />
                    </div>
                </FilledElement>
            </div>

        </div>
    </>
}

export default AddNewDialogButton