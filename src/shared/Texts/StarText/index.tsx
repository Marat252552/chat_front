import styles from './lib/styles.module.css'


const StarText = ({children}: {children: string}) => (
    <span className={styles.text}>{children}</span>
)

export default StarText