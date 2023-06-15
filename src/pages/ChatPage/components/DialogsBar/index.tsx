import Dialog from '../../../../entities/Dialog'
import AddNewDialogButton from '../../../../features/AddNewDialog'
import ClearAllChats from '../../../../features/ClearAllChats'
import SearchInput from '../../../../features/SearchInput'
import StatusDisplay from '../../../../features/StatusDisplay'
import { useAppSelector } from '../../../../state/hooks'
import styles from './lib/styles.module.css'


const DialogsBar = () => {

    let dialogs = useAppSelector(state => state.dialogsReducer.dialogs)


    return <div className={styles.container}>
        <div className={styles.first_module}>
            <StatusDisplay />
            <ClearAllChats />

            {dialogs && dialogs.map(dialog => {
                return <Dialog key={dialog.room_id} dialog={dialog}/>
            })}
        </div>

        <AddNewDialogButton />
    </div>
}

export default DialogsBar