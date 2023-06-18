import styles from './lib/styles.module.css'


const MiddleText = ({children}: {children: string}) => (
    <span className={styles.text}>{children}</span>
)

export default MiddleText