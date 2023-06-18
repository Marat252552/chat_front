import styles from './lib/styles.module.css'

// When this button is on hover, its background is filled
const IconButton = ({ Icon, onClick }: { Icon: any, onClick: React.MouseEventHandler<any> }) => {
    return <div onClick={onClick} className={styles.container}>
        <Icon />
    </div>
}

export default IconButton