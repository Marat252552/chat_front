import React from 'react'
import FilledElement from '../../UI/FilledElement'
import StarText from '../../shared/Texts/StarText'
import StatusCircle from '../../entities/StatusCircle'
import { useAppSelector } from '../../state/hooks'

const StatusDisplay = () => {

    let { is_connected } = useAppSelector(state => state.userReducer)
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