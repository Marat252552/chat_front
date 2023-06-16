import { InfoCircleOutlined } from '@ant-design/icons'
import IconTextButton from '../../UI/Buttons/IconTextButton'


const InfoPageNavigateButton = ({ navigateToInfoPage }: { navigateToInfoPage: () => void }) => {
    return (
        <IconTextButton
            text='Информация'
            Icon={InfoCircleOutlined}
            onClick={navigateToInfoPage}
        />
    )
}

export default InfoPageNavigateButton