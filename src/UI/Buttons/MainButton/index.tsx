import styles from './lib/styles.module.css'

// When this button is on hover, its background is filled
const MainButton = ({children}: {children: any}) => {
    return <div className={styles.container}>
        {children}
    </div>
}

export default MainButton