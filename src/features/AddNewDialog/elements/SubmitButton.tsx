import { PlusOutlined } from '@ant-design/icons'
import IconFilledButton from '../../../UI/Buttons/IconFilledButton'
import MainIcon from '../../../shared/Icons/MainIcon'

const SubmitButton = () => {
    let IconComponent = <MainIcon style={{color: 'black'}} Icon={PlusOutlined}/>
    return <>
        <IconFilledButton IconComponent={IconComponent}/>
    </>
}



export default SubmitButton