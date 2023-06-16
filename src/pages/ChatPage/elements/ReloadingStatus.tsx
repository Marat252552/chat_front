import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import MainText from '../../../shared/Texts/MainText'

const ReloadingStatus = () => {
    return (
        <div style={{ width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: 'var(--middle-text-color)' }} spin />} />
            <MainText>Попытка соединения</MainText>
        </div>
  )
}

export default ReloadingStatus