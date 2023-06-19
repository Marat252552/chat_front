import { Image } from 'antd'
import { Message_T } from '../../shared/types'

const ImageMessage = ({ message }: { message: Message_T }) => (
  <div>
    <Image
      style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'cover' }}
      src={message.src}
      alt={'Изображение'} />
  </div>
)

export default ImageMessage