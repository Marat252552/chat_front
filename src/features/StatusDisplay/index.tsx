import FilledElement from '../../UI/FilledElement'
import StatusCircle from '../../entities/StatusCircle'
import MiddleText from '../../shared/Texts/MiddleText/MiddleText'

const StatusDisplay = ({is_connected}: {is_connected: boolean}) => {

    let status = is_connected ? 'Вы онлайн' : 'Вы офлайн'
    return (
        <FilledElement >
            <StatusCircle is_connected={is_connected} />
            <MiddleText>
                {status}
            </MiddleText>
        </FilledElement>
    )
}

export default StatusDisplay