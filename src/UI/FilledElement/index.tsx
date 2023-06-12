import styles from './lib/styles.module.css'


const FilledElement = (props: {children: any, style: any}) => {
    return <div {...props} className={styles.container}>
        {props.children}
    </div>
}

export default FilledElement