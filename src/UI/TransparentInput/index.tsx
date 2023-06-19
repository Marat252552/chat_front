import { forwardRef } from 'react'
import styles from './lib/styles.module.css'


const TransparentInput = forwardRef((props: any, ref: any) => (
    <input
        {...props}
        ref={ref}
        style={{ width: '100%' }}
        className={styles.custom_input}
    />
))

export default TransparentInput