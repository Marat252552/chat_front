import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogsBar from "../../widgets/DialogsBar"
import styles from './lib/styles.module.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import background_styles from './lib/background.module.css'
import MainModule from "./elements/MainModule"


const ChatPage = () => {

    let [isScrolled, setIsScrolled] = useState(false)
    let [navbarActive, setNavbarActive] = useState(false)
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
                    {navbarActive && <DialogsBar setNavbarActive={setNavbarActive} active={navbarActive} navigateToInfoPage={navigateToInfoPage} />}
                    <MainModule setNavbarActive={setNavbarActive} />

                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage