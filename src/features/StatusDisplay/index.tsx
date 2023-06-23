import FilledElement from '../../UI/FilledElement'
import StatusCircle from '../../entities/StatusCircle'
import MiddleText from '../../shared/Texts/MiddleText/MiddleText'
import { message } from 'antd'

const StatusDisplay = ({ is_connected, user_id }: { is_connected: boolean, user_id: string | undefined}) => {

    const ID = 'Мой ID'

    const copyToCliboard = () => {
        if(!user_id) return
        navigator.clipboard.writeText(user_id)
        message.info('ID скопирован')
    }

    return (
        <div onClick={copyToCliboard} style={{cursor: 'pointer'}}>
            <FilledElement >
                <StatusCircle is_connected={is_connected} />
                <MiddleText>
                    {ID}
                </MiddleText>
            </FilledElement>
        </div>

    )
}

export default StatusDisplay