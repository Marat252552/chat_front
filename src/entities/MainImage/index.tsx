import { Image } from 'antd'
import { Message_T } from '../../shared/types'

const ImageMessage = ({ message }: { message: Message_T }) => (
  <div>
    <Image
      style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      src={message.src}
      alt={'Изображение'} />
  </div>
)

export default ImageMessage