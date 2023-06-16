import { InfoCircleOutlined } from '@ant-design/icons'
import IconTextButton from '../../UI/Buttons/IconTextButton'
import { memo } from 'react'


const InfoPageNavigateButton = memo(({ navigateToInfoPage }: { navigateToInfoPage: () => void }) => {
    
    return (
        <IconTextButton
            text='Информация'
            Icon={InfoCircleOutlined}
            onClick={navigateToInfoPage}
        />
    )
})

export default InfoPageNavigateButton