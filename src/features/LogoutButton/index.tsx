import { LogoutOutlined } from "@ant-design/icons"
import { useAppDispatch } from "../../state/hooks"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import {memo} from 'react'
import userSlice from "../../state/Reducers/UserReducer"


const LogoutButton = memo(() => {

    let dispatch = useAppDispatch()
    let { logout } = userSlice.actions

    let clearAllChats = () => {
        dispatch(logout())
    }
    return <>
        <IconTextButton
            text="Выйти"
            Icon={LogoutOutlined}
            onClick={clearAllChats}
        />
    </>
})

export default LogoutButton