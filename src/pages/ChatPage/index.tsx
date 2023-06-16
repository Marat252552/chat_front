import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogModule from "../../widgets/DialogModule"
import DialogsBar from "../../widgets/DialogsBar"
import styles from './lib/styles.module.css'
import { useAppSelector } from "../../state/hooks"
import MainText from "../../shared/Texts/MainText"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import background_styles from './lib/background.module.css'
import { Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons"


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
                    <DialogsBar navigateToInfoPage={navigateToInfoPage}/>
                    {
                        (is_connected) ?
                            (!currentDialog.room_id) ?
                                <div style={{ width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                    <MainText>Выберите диалог</MainText>
                                </div>
                                :
                                <DialogModule />
                            :
                            <div style={{ width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: 'var(--middle-text-color)' }} spin />} />
                                <MainText>Попытка соединения</MainText>
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