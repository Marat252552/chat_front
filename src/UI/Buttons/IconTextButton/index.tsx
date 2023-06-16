import styles from './lib/styles.module.css'

// When this button is on hover, its background is filled
const IconTextButton = ({ Icon, text, onClick }: { Icon: any, text: string, onClick: React.MouseEventHandler<any> }) => {
    return <div onClick={onClick} className={styles.container}>
        <Icon />
        {text}
    </div>
}

export default IconTextButton