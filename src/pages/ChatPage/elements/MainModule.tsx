import { useAppSelector } from "../../../state/hooks"
import DialogModule from "../../../widgets/DialogModule"
import ChooseDialogStatus from "./ChooseDialogStatus"
import ReloadingStatus from "./ReloadingStatus"



const MainModule = () => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { is_connected } = useAppSelector(state => state.userReducer)

    return <>
        {
            (is_connected) ?
                (!currentDialog.room_id) ?
                    <ChooseDialogStatus />
                    :
                    <DialogModule />
                :
                <ReloadingStatus />
        }
    </>
}

export default MainModule