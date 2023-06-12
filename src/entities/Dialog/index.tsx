import Element from "../../UI/Element"
import { Dialog_T } from "../../shared/types"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch } from "../../state/hooks"
import styles from './lib/styles.module.css'


const Dialog = ({ dialog }: { dialog: Dialog_T }) => {

    let { setCurrentRoomId } = dialogsSlice.actions
    let dispatch = useAppDispatch()

    let changeCurrentDialog = () => {
        dispatch(setCurrentRoomId(dialog))
    }

    return <>
        <div onClick={changeCurrentDialog}>
            <Element>
                <div className={styles.circle}></div>
                <span className={styles.text}>{dialog.name || dialog.room_id || 'ID'}</span>
            </Element>
        </div>
    </>
}

export default Dialog