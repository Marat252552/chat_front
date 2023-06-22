import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogsBar from "../../widgets/DialogsBar"
import styles from './lib/styles.module.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import MainModule from "./elements/MainModule"
import CloseTransition from "../../shared/transitions/CloseTransition"


const ChatPage = () => {

    let [active, setActive] = useState(false)
    let [navbarActive, setNavbarActive] = useState(false)
    let navigate = useNavigate()
    let navigateToInfoPage = () => {
        setActive(true)
        setTimeout(() => {
            navigate('/info')
        }, 3000)
    }

    return <>
        <StartTransition />
        <CloseTransition active={active}/>
        
        <div className={styles.background_container}>
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