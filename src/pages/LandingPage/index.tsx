import MainPageTemplate from '../../shared/templates/MainPageTemplate'
import styles from './lib/styles.module.css'
import background_styles from './lib/CSS/background.module.css'
import start_transition_styles from './lib/CSS/start_transition.module.css'
import main_styles from './lib/CSS/main_styles.module.css'
import { useState } from 'react'


const LandingPage = () => {

    let [isScaled, setIsScaled] = useState(false)

    let [isScrolled, setIsScrolled] = useState(false)

    return <>

        <div className={start_transition_styles.start_transition}></div>

        <div className={main_styles.main_container}>
            <div className={`${background_styles.background} ${(isScrolled)? background_styles.scrolled : null}`}></div>
            <MainPageTemplate>

                <div
                    onClick={() => { 
                        setIsScaled(true)
                        setIsScrolled(true)
                     }}
                    className={`${main_styles.info_container} ${(isScaled) ? main_styles.scaled : null}`}
                >
                    <span className={styles.upper_text}>Get started with</span>
                    <div className={styles.gradient_text_container}>
                        <span className={styles.gradient_text}>Twixtor chat</span>
                    </div>
                </div>
            </MainPageTemplate>
        </div>
        <div className={styles.ending_transition}></div>
    </>
}

export default LandingPage