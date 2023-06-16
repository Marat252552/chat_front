import styles from './lib/styles.module.css'

const MainIcon = ({ Icon, style }: { Icon: any, style?: React.CSSProperties | undefined }) => (
    <Icon className={styles.icon} style={style} />
)

export default MainIcon