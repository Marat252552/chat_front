import styles from './lib/styles.module.css'


const FilledContainer = (props: {children?: any, style?: any, onClick?: () => void}) => {
    return <div {...props} className={styles.container}>
        {props.children}
    </div>
}

export default FilledContainer