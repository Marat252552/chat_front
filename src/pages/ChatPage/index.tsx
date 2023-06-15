import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogModule from "./components/DialogModule"
import DialogsBar from "./components/DialogsBar"
import styles from './lib/styles.module.css'
import { useAppSelector } from "../../state/hooks"
import MainText from "../../shared/Texts/MainText"


const ChatPage = () => {

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)
    let { is_connected } = useAppSelector(state => state.userReducer)

    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <MainPageTemplate>

                <div className={styles.container}>
                    <DialogsBar />
                    {
                        (is_connected) ?
                            (!currentDialog.room_id) ?
                                <div style={{ width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <MainText>No dialog is chosen</MainText>
                                </div>
                                :
                                <DialogModule />
                            :
                            <div style={{ width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <MainText>Connection is lost</MainText>
                            </div>
                    }
                    {

                    }

                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage