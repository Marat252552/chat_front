import { InfoCircleOutlined } from '@ant-design/icons'
import MainButton from '../../UI/Buttons/MainButton'
import MainIcon from '../../shared/Icons/MainIcon'
import MiddleText from '../../shared/Texts/MiddleText'


const InfoPageNavigateButton = ({ navigateToInfoPage }: { navigateToInfoPage: () => void }) => {
    return (
        <MainButton onClick={navigateToInfoPage}>
            <MainIcon Component={InfoCircleOutlined}/>
            <MiddleText>
                Информация
            </MiddleText>
        </MainButton>
    )
}

export default InfoPageNavigateButton