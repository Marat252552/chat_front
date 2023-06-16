import { CloseOutlined } from '@ant-design/icons'
import MainIcon from '../../../shared/Icons/MainIcon'
import IconOutlinedButton from '../../../UI/Buttons/IconOutlinedButton'

const CloseFormButton = () => {
    let IconComponent = <MainIcon style={{color: 'white'}} Icon={CloseOutlined} />
    return <>
        <IconOutlinedButton IconComponent={IconComponent}/>
    </>
}

export default CloseFormButton