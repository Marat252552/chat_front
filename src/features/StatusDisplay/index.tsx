import FilledElement from '../../UI/FilledElement'
import StarText from '../../shared/Texts/StarText'
import StatusCircle from '../../entities/StatusCircle'

const StatusDisplay = ({is_connected}: {is_connected: boolean}) => {

    let status = is_connected ? 'Connected' : 'Disconnected'
    return (
        <FilledElement >
            <StatusCircle is_connected={is_connected} />
            <StarText>
                {status}
            </StarText>
        </FilledElement>
    )
}

export default StatusDisplay