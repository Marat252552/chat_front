import styles from './lib/styles.module.css'


const FormPageTemplate = ({ children }: { children: any }) => {

    return <div className={styles.max_width_container}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
}


export default FormPageTemplate