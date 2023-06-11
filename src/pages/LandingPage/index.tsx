import MainPageTemplate from '../../shared/templates/MainPageTemplate'
import styles from './lib/styles.module.css'


const LandingPage = () => {
    return <>
        <MainPageTemplate>
            <div className={styles.container}>
                <span className={styles.upper_text}>Get started with</span>
                <div className={styles.gradient_text_container}>
                    <span className={styles.gradient_text}>AI template</span>
                </div>
            </div>
        </MainPageTemplate>
    </>
}

export default LandingPage