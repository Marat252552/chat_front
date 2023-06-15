import styles from './lib/styles.module.css'

const MainIcon = ({ Component, style }: { Component: any, style?: React.CSSProperties | undefined }) => (
    <Component className={styles.icon} style={style} />
)

export default MainIcon