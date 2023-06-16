import { RedoOutlined } from "@ant-design/icons"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"
import { useAppDispatch } from "../../state/hooks"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import MainButton from "../../UI/Buttons/MainButton"
import MiddleText from "../../shared/Texts/MiddleText"


const ClearAllChats = () => {

    let dispatch = useAppDispatch()
    let { removeAllDialogs } = dialogsSlice.actions

    let clearAllChats = () => {
        dispatch(removeAllDialogs())
    }
    return <>
        <div
            className={styles.container}>
            <MainButton onClick={clearAllChats}>
                <MainIcon Component={RedoOutlined} />
                <MiddleText>Покинуть все чаты</MiddleText>
            </MainButton>
        </div>
    </>
}

export default ClearAllChats