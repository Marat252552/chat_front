import styles from './lib/styles.module.css'


const OutlinedElement = (props: {children?: any, style?: any, onClick?: () => void}) => {
    return <div {...props} className={styles.container}>
        {props.children}
    </div>
}

export default OutlinedElement