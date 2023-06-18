import { MenuFoldOutlined } from '@ant-design/icons'
import IconTextButton from '../../../UI/Buttons/IconTextButton'
import MainText from '../../../shared/Texts/MainText'

const ChooseDialogStatus = ({setNavbarActive}: {setNavbarActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (
        <div style={{ width: '100%', display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <MainText>Выберите диалог</MainText>
            <IconTextButton
                text='Чаты'
                Icon={MenuFoldOutlined}
                onClick={() => setNavbarActive(true)}
            />
        </div>
    )
}

export default ChooseDialogStatus