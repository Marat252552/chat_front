import { PlusOutlined } from '@ant-design/icons'
import FilledElement from '../../../UI/FilledElement'
import MainIcon from '../../../shared/Icons/MainIcon'

const SubmitButton = () => (
    <button style={{ display: 'flex', border: 'none', justifyContent: 'center', width: '100%', backgroundColor: 'transparent' }}>
        <FilledElement
            style={{ backgroundColor: 'white', cursor: 'pointer', width: '100%' }}>
            <MainIcon style={{ color: 'black', margin: '0 auto' }} Component={PlusOutlined} />
        </FilledElement>
    </button>
)

export default SubmitButton