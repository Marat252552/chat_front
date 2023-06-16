import ClearChatButton from '../../../features/ClearChatButton'
import StarText from '../../../shared/Texts/StarText'
import styles from './../lib/styles.module.css'
import { memo } from 'react'


const HeaderModule = memo(({ name }: { name: string }) => {
    return <div className={styles.header_module}>
        <StarText>{name || `Room's name`}</StarText>
        <ClearChatButton />
    </div>
})

export default HeaderModule