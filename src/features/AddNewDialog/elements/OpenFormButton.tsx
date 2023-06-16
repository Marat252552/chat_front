import { PlusOutlined } from '@ant-design/icons'
import FilledElement from '../../../UI/FilledElement'
import MainIcon from '../../../shared/Icons/MainIcon'

const OpenFormButton = () => (
    <FilledElement >
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <MainIcon style={{ color: 'var(--text-color)' }} Component={PlusOutlined} />
        </div>
    </FilledElement>
)

export default OpenFormButton