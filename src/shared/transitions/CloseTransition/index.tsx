import styles from './lib/styles.module.css'


const CloseTransition = ({active}: {active: boolean}) => (
    <div className={`${styles.background} ${(active) ? styles.scrolled : null}`}></div>
)

export default CloseTransition