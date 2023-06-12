import styles from './lib/styles.module.css'


const OutcomingMessage = ({value}: {value: string}) => (
    <div className={styles.container}>
        <div className={styles.text}>{value}</div>
    </div>
)

export default OutcomingMessage