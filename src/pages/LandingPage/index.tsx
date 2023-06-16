import MainPageTemplate from '../../shared/templates/MainPageTemplate'
import styles from './lib/styles.module.css'
import background_styles from './lib/CSS/background.module.css'
import main_styles from './lib/CSS/main_styles.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StartTransition from '../../shared/transitions/StartTransition'


const LandingPage = () => {

    let [isScaled, setIsScaled] = useState(false)
    let [isScrolled, setIsScrolled] = useState(false)

    let navigate = useNavigate()

    let navigateToChatPage = () => {
        setIsScaled(true)
        setIsScrolled(true)
        setTimeout(() => {
            navigate('/chat')
        }, 4000)
    }

    return <>

        <StartTransition />

        <div className={main_styles.main_container}>
            <div className={`${background_styles.background} ${(isScrolled)? background_styles.scrolled : null}`}></div>
            <MainPageTemplate>

                <div
                    onClick={navigateToChatPage}
                    className={`${main_styles.info_container} ${(isScaled) ? main_styles.scaled : null}`}
                >
                    <span className={styles.upper_text}>Get started with</span>
                    <div className={styles.gradient_text_container}>
                        <span className={styles.gradient_text}>Twixtor chat</span>
                    </div>
                </div>
            </MainPageTemplate>
        </div>
    </>
}

export default LandingPage