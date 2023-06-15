import { RedoOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"
import { useAppDispatch } from "../../state/hooks"
import dialogsSlice from "../../state/Reducers/DialogsReducer"


const ClearAllChats = () => {

    let dispatch = useAppDispatch()
    let { removeAllDialogs } = dialogsSlice.actions

    let clearAllChats = () => {
        dispatch(removeAllDialogs())
    }
    return <>
        <div
            onClick={clearAllChats}
            className={styles.container}>
            <FilledElement>
                <MainIcon Component={RedoOutlined} />
                <span className={styles.text}>Clear chats</span>
            </FilledElement>
        </div>
    </>
}

export default ClearAllChats