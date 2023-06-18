import { MenuFoldOutlined } from '@ant-design/icons'
import IconTextButton from '../../../UI/Buttons/IconTextButton'
import ClearChatButton from '../../../features/ClearChatButton'
import StarText from '../../../shared/Texts/StarText'
import styles from './../lib/styles.module.css'
import { memo } from 'react'


const HeaderModule = memo(({ name, setNavbarActive }: { name: string, setNavbarActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return <div className={styles.header_module}>
        <IconTextButton
            text='Чаты'
            Icon={MenuFoldOutlined}
            onClick={() => setNavbarActive(true)}
        />
        <StarText>{name || `Room's name`}</StarText>
        <ClearChatButton />
    </div>
})

export default HeaderModule