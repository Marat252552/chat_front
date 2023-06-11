import styles from './lib/styles.module.css'


const Element = ({children}: {children: any}) => {
    return <div className={styles.container}>
        {children}
    </div>
}

export default Element