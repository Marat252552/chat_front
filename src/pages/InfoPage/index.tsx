import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import styles from './lib/styles.module.css'
import background_styles from './lib/background.module.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import StarText from "../../shared/Texts/StarText"
import MiddleText from "../../shared/Texts/MiddleText/MiddleText"
import FilledContainer from "../../UI/FilledContainer"
import IconTextButton from "../../UI/Buttons/IconTextButton"
import { RollbackOutlined } from "@ant-design/icons"


const InfoPage = () => {

    let [isScrolled, setIsScrolled] = useState(false)
    let navigate = useNavigate()
    let navigateToChatPage = () => {
        setIsScrolled(true)
        setTimeout(() => {
            navigate('/chat')
        }, 3000)
    }

    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <div className={`${background_styles.background} ${(isScrolled) ? background_styles.scrolled : null}`}></div>
            <MainPageTemplate>
                <div className={styles.container}>
                    <FilledContainer>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '10px' }}>

                            <IconTextButton
                                onClick={navigateToChatPage}
                                Icon={RollbackOutlined}
                                text="Назад"
                            />

                            <StarText>Почему загрузка идет так долго?</StarText>
                            <MiddleText>
                                При первом запуске приложения, установка соединения может занимать до 30 секунд
                            </MiddleText>
                            <StarText>Как пользоваться?</StarText>
                            <MiddleText>
                                1. Введите уникальный ID комнаты и дайте ей название
                            </MiddleText>
                            <MiddleText>
                                Если вы ввели ID уже существующей комнаты, то вы просто войдете в нее
                            </MiddleText>
                            <MiddleText>
                                2. Передайте этот ID своим собеседникам. Они должны повторить действия в пункте 1
                            </MiddleText>
                            <MiddleText>
                                3. Когда собеседник войдет в вашу комнату, вы сможете общаться
                            </MiddleText>
                        </div>

                    </FilledContainer>

                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default InfoPage