import Element from "../../UI/Element"
import getShortenedValue from "../../shared/helpers/getShortenedValue"
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

    let name = getShortenedValue(dialog.name, 12)
    let room_id = getShortenedValue(dialog.room_id, 12)
    
    return <>
        <div onClick={changeCurrentDialog}>
            <Element>
                <StatusCircle is_connected={is_connected}/>
                <span className={styles.text}>{name || room_id || 'ID'}</span>
            </Element>
        </div>
    </>
}

export default Dialog