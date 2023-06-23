import Dialog from '../../entities/Dialog'
import AddNewDialogButton from '../../features/AddNewDialog'
import InfoPageNavigateButton from '../../features/InfoPageNavigateButton'
import LogoutButton from '../../features/LogoutButton'
import StatusDisplay from '../../features/StatusDisplay'
import { useAppSelector } from '../../state/hooks'
import styles from './lib/styles.module.css'
import { memo } from 'react'
import { DialogsBar_T } from './lib/types'


const DialogsBar: DialogsBar_T = memo(({ navigateToInfoPage, active, setNavbarActive }) => {

    let { dialogs } = useAppSelector(state => state.dialogsReducer)
    let { is_connected, user } = useAppSelector(state => state.userReducer)
    const { user_id } = user

    return <>
        <div className={`${styles.container} ${active ? styles.active : undefined}`}>
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
    </>
})


export default DialogsBar