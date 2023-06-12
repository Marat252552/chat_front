import Dialog from '../../../../entities/Dialog'
import AddNewDialogButton from '../../../../features/AddNewDialog'
import ClearAllChats from '../../../../features/ClearAllChats'
import SearchInput from '../../../../features/SearchInput'
import dialogsSlice from '../../../../state/Reducers/DialogsReducer'
import { useAppDispatch, useAppSelector } from '../../../../state/hooks'
import styles from './lib/styles.module.css'


const DialogsBar = () => {

    let dialogs = useAppSelector(state => state.dialogsReducer.dialogs)


    return <div className={styles.container}>
        <div className={styles.first_module}>
            <SearchInput />
            <ClearAllChats />

            {dialogs && dialogs.map(dialog => {
                return <Dialog key={dialog.room_id} dialog={dialog}/>
            })}
        </div>

        <AddNewDialogButton />
    </div>
}

export default DialogsBar