import { CloseOutlined } from '@ant-design/icons'
import OutlinedElement from '../../../UI/OutlinedElement'
import MainIcon from '../../../shared/Icons/MainIcon'

const CloseFormButton = () => (
    <OutlinedElement >
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <MainIcon style={{ color: 'white' }} Component={CloseOutlined} />
        </div>
    </OutlinedElement>
)

export default CloseFormButton