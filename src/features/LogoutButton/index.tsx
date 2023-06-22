import { LogoutOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../state/hooks"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import { memo } from 'react'
import userSlice from "../../state/Reducers/UserReducer"
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import messagesSlice from "../../state/Reducers/MessagesReducer"


const LogoutButton = memo(() => {

    const dispatch = useAppDispatch()
    const { resetUserState } = userSlice.actions
    const { resetDialogsState } = dialogsSlice.actions
    const { resetMessagesState } = messagesSlice.actions

    let reset = () => {
        dispatch(resetUserState())
        dispatch(resetDialogsState())
        dispatch(resetMessagesState())
    }
    return <>
        <IconTextButton
            text="Выйти"
            Icon={LogoutOutlined}
            onClick={reset}
        />
    </>
})

export default LogoutButton