import loggedCheck from '../../processes/loggedCheck'
import styles from './lib/styles.module.css'


const FormPageTemplate = ({ children }: { children: any }) => {

    loggedCheck()

    return <div className={styles.max_width_container}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
}


export default FormPageTemplate