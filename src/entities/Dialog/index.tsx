import Element from "../../UI/Element"
import { Dialog_T } from "../../shared/types"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch } from "../../state/hooks"
import StatusCircle from "../StatusCircle"
import styles from './lib/styles.module.css'


const Dialog = ({ dialog, is_connected }: { dialog: Dialog_T, is_connected: boolean }) => {

    let { setCurrentRoomId } = dialogsSlice.actions
    let dispatch = useAppDispatch()

    let changeCurrentDialog = () => {
        dispatch(setCurrentRoomId(dialog))
    }

    return <>
        <div onClick={changeCurrentDialog}>
            <Element>
                <StatusCircle is_connected={is_connected}/>
                <span className={styles.text}>{dialog.name || dialog.room_id || 'ID'}</span>
            </Element>
        </div>
    </>
}

export default Dialog