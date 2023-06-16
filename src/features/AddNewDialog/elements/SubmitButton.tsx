import { PlusOutlined } from '@ant-design/icons'
import FilledElement from '../../../UI/FilledElement'
import MainIcon from '../../../shared/Icons/MainIcon'
import TransparentButton from '../../../UI/TransparentButton'

const SubmitButton = () => (
    <TransparentButton>
        <FilledElement
            style={{ backgroundColor: 'white', cursor: 'pointer', width: '100%' }}>
            <MainIcon style={{ color: 'black', margin: '0 auto' }} Component={PlusOutlined} />
        </FilledElement>
    </TransparentButton>
)

export default SubmitButton