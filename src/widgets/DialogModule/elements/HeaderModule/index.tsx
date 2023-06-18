import { MenuUnfoldOutlined } from '@ant-design/icons'
import IconTextButton from '../../../../UI/Buttons/IconTextButton'
import ClearChatButton from '../../../../features/ClearChatButton'
import StarText from '../../../../shared/Texts/StarText'
import styles from './../../lib/styles.module.css'
import { memo } from 'react'
import IconButton from '../../../../UI/Buttons/IconButton'


const HeaderModule = memo(({ name, setNavbarActive }: { name: string, setNavbarActive: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return <div className={styles.header_module}>
        <div className={styles.pc_version_button}>
            <IconTextButton
                text='Чаты'
                Icon={MenuUnfoldOutlined}
                onClick={() => setNavbarActive(true)}
            />
        </div>
        <div className={styles.mobile_version_button}>
            <IconButton
                onClick={() => setNavbarActive(true)}
                Icon={MenuUnfoldOutlined}
            />
        </div>
        <StarText>{name || `Room's name`}</StarText>
        <ClearChatButton />
    </div>
})

export default HeaderModule