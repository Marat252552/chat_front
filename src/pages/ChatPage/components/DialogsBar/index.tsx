import Dialog from '../../../../entities/Dialog'
import AddNewDialogButton from '../../../../features/AddNewDialog'
import ClearAllChats from '../../../../features/ClearAllChats'
import SearchInput from '../../../../features/SearchInput'
import styles from './lib/styles.module.css'


const DialogsBar = () => {
    return <div className={styles.container}>
        <div className={styles.first_module}>
            <SearchInput />
            <ClearAllChats />
            <Dialog />
        </div>

        <AddNewDialogButton />
    </div>
}

export default DialogsBar