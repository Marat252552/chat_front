import styles from './lib/styles.module.css'

// When this button is on hover, its background is filled
const MainButton = ({children, onClick}: {children: any, onClick: React.MouseEventHandler<any>}) => {
    return <div onClick={onClick} className={styles.container}>
        {children}
    </div>
}

export default MainButton