import styles from './lib/styles.module.css'


const MainPageTemplate = ({children}: {children: any}) => {
    return <div className={styles.max_width_container}>
        {children}
    </div>
}

export default MainPageTemplate