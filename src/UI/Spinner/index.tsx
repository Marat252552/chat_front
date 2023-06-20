import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'


const Spinner = () => (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 18, color: 'var(--middle-text-color)' }} spin />} />
)

export default Spinner