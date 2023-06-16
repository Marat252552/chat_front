import { RedoOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../state/hooks"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import IconTextButton from "../../UI/Buttons/IconTextButton"


const ClearAllChats = () => {

    let dispatch = useAppDispatch()
    let { removeAllDialogs } = dialogsSlice.actions

    let clearAllChats = () => {
        dispatch(removeAllDialogs())
    }
    return <>
        <IconTextButton
            text="Покинуть все чаты"
            Icon={RedoOutlined}
            onClick={clearAllChats}
        />
    </>
}

export default ClearAllChats