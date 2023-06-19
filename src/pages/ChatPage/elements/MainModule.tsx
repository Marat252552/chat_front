import { useAppSelector } from "../../../state/hooks"
import DialogModule from "../../../widgets/DialogModule"
import ChooseDialogStatus from "./ChooseDialogStatus"
import ReloadingStatus from "./ReloadingStatus"



const MainModule = ({ setNavbarActive }: { setNavbarActive: React.Dispatch<React.SetStateAction<boolean>> }) => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { is_connected } = useAppSelector(state => state.userReducer)

    return <>
        {
            (is_connected) ?
                (!currentDialog.room_id) ?
                    <ChooseDialogStatus setNavbarActive={setNavbarActive} />
                    :
                    <DialogModule setNavbarActive={setNavbarActive} />
                :
                <ReloadingStatus />
        }
    </>
}

export default MainModule