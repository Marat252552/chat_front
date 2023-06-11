import styles from './lib/styles.module.css'


const TransparentInput = (props: any) => (
    <input
        {...props}
        className={styles.custom_input}
    />
)

export default TransparentInput