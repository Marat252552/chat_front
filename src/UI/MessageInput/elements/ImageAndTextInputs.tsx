import { FileImageOutlined, FileImageTwoTone, LoadingOutlined } from '@ant-design/icons'
import styles from './../lib/styles.module.css'
import { Spin } from 'antd'
import CustomIcon from './CustomIcon'
import TransparentInput from '../../TransparentInput'
import { ImageAndTextInputs_T } from '../lib/types'


const ImageAndTextInputs: ImageAndTextInputs_T = ({ register, fileLoading, preuploadFile, fileId }) => (
    <div className={styles.imageAndTextInputs}>
        <div>

            {
                fileLoading ?
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 14, color: 'var(--middle-text-color)' }} spin />} />
                    :
                    <>
                        <input
                            className={styles.file_input}
                            onChange={preuploadFile}
                            accept='image/*'
                            id='file'
                            type='file'
                            name='file'
                        />

                        <label htmlFor='file'>
                            {
                                fileId ?
                                    <CustomIcon Icon={FileImageTwoTone} />
                                    :
                                    <CustomIcon Icon={FileImageOutlined} />
                            }
                        </label>
                    </>

            }



        </div>

        <TransparentInput
            {...register('text')}
            style={{ width: '100%' }}
            placeholder='Введите сообщение'
            autoComplete='off'
        />
    </div>
)

export default ImageAndTextInputs