import Dialog from '../../entities/Dialog'
import AddNewDialogButton from '../../features/AddNewDialog'
import InfoPageNavigateButton from '../../features/InfoPageNavigateButton'
import LogoutButton from '../../features/LogoutButton'
import StatusDisplay from '../../features/StatusDisplay'
import { useAppDispatch, useAppSelector } from '../../state/hooks'
import styles from './lib/styles.module.css'
import { memo } from 'react'
import { DialogsBar_T } from './lib/types'
import { useEffect } from 'react'
import dialogsSlice from '../../state/Reducers/DialogsReducer'
import { message } from 'antd'
import getRoomsAPI from '../../shared/api/actions/getRoomsAPI'


const DialogsBar: DialogsBar_T = memo(({ navigateToInfoPage, active, setNavbarActive }) => {

    let { dialogs } = useAppSelector(state => state.dialogsReducer)
    let { contacts } = useAppSelector(state => state.contactsReducer)
    let { is_connected, user } = useAppSelector(state => state.userReducer)
    const {user_id} = user

    let dispatch = useAppDispatch()
    let { addDialog } = dialogsSlice.actions

    useEffect(() => {
        let fetchDialogs = async () => {
            try {
                const {data} = await getRoomsAPI()
                const {rooms} = data
                rooms.forEach(room => {
                    dispatch(addDialog(room))
                })
            } catch(e: any) {
                const message_info = e.response.data.message || 'Произошла непредвиденная ошибка'
                console.log(e)
                message.error(message_info)
            }
        }
        fetchDialogs()
    }, [contacts])


    return <div className={`${styles.container} ${active ? styles.active : undefined}`}>
        <div className={styles.module}>
            <LogoutButton />
            <InfoPageNavigateButton navigateToInfoPage={navigateToInfoPage} />
            <StatusDisplay is_connected={is_connected} user_id={user_id} />

            <div className={`${styles.module} ${styles.dialogs}`}>
                {dialogs && dialogs.map(dialog => {
                    return <Dialog
                        setNavbarActive={setNavbarActive}
                        is_connected={is_connected}
                        key={dialog.room_id}
                        dialog={dialog}
                    />
                })}
            </div>

        </div>

        <AddNewDialogButton />
    </div>
})


export default DialogsBar