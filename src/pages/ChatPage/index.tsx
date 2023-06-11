import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogModule from "./components/DialogModule"
import DialogsBar from "./components/DialogsBar"
import styles from './lib/styles.module.css'


const ChatPage = () => {
    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <MainPageTemplate>

                <div className={styles.container}>
                    <DialogsBar />
                    <DialogModule />
                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage