import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogModule from "../../widgets/DialogModule"
import DialogsBar from "../../widgets/DialogsBar"
import styles from './lib/styles.module.css'
import { useAppSelector } from "../../state/hooks"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import background_styles from './lib/background.module.css'
import ReloadingStatus from "./elements/ReloadingStatus"
import ChooseDialogStatus from "./elements/ChooseDialogStatus"


const ChatPage = () => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { is_connected } = useAppSelector(state => state.userReducer)

    let [isScrolled, setIsScrolled] = useState(false)
    let navigate = useNavigate()
    let navigateToInfoPage = () => {
        setIsScrolled(true)
        setTimeout(() => {
            navigate('/info')
        }, 3000)
    }

    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <div className={`${background_styles.background} ${(isScrolled) ? background_styles.scrolled : null}`}></div>
            <MainPageTemplate>

                <div className={styles.container}>
                    <DialogsBar navigateToInfoPage={navigateToInfoPage} />
                    {
                        (is_connected) ?
                            (!currentDialog.room_id) ?
                                <ChooseDialogStatus />
                                :
                                <DialogModule />
                            :
                            <ReloadingStatus />
                    }
                    {

                    }

                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage