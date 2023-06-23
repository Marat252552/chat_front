import IncomingMessage from "../../UI/IncomingMessage";
import OutcomingMessage from "../../UI/OutcomingMessage";
import MiddleText from "../../shared/Texts/MiddleText/MiddleText";
import { Event_T, Message_T } from "../../shared/types";
import { useAppSelector } from "../../state/hooks";


const Message = ({message}: {message: Message_T}) => {

    let {user_id} = useAppSelector(state => state.userReducer.user)

    if(message.event === Event_T.user_connected) {
        return <div key={message.message_id} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MiddleText>{message.text || ''}</MiddleText>
        </div>
    }

    if(message.user_id === user_id) {
        return <OutcomingMessage message={message}/>
    } else {
        return <IncomingMessage message={message}/>
    }
}



export default Message