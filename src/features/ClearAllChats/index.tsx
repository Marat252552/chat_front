import { RedoOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../state/hooks"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import {memo} from 'react'


const ClearAllChats = memo(() => {

    let dispatch = useAppDispatch()
    let { resetDialogsState } = dialogsSlice.actions

    let clearAllChats = () => {
        dispatch(resetDialogsState())
    }
    return <>
        <IconTextButton
            text="Покинуть все чаты"
            Icon={RedoOutlined}
            onClick={clearAllChats}
        />
    </>
})

export default ClearAllChats