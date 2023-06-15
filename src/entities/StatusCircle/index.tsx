import styles from './lib/styles.module.css'


const StatusCircle = ({ is_connected }: { is_connected: boolean }) => (
    <div className={`${styles.circle} ${is_connected ? styles.connected : styles.disconnected}`}></div>
)

export default StatusCircle