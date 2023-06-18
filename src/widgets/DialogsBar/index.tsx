import Dialog from '../../entities/Dialog'
import AddNewDialogButton from '../../features/AddNewDialog'
import ClearAllChats from '../../features/ClearAllChats'
import InfoPageNavigateButton from '../../features/InfoPageNavigateButton'
import StatusDisplay from '../../features/StatusDisplay'
import { useAppSelector } from '../../state/hooks' 
import styles from './lib/styles.module.css'
import {memo} from 'react'

const DialogsBar = memo(({navigateToInfoPage, active, setNavbarActive}: {setNavbarActive: React.Dispatch<React.SetStateAction<boolean>>, navigateToInfoPage: () => void, active: boolean}) => {

    let dialogs = useAppSelector(state => state.dialogsReducer.dialogs)
    let { is_connected } = useAppSelector(state => state.userReducer)

    return <div className={`${styles.container} ${active? styles.active : undefined}` }>
        <div className={styles.module}>
            <InfoPageNavigateButton navigateToInfoPage={navigateToInfoPage}/>
            <ClearAllChats />
            <StatusDisplay is_connected={is_connected} />

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