import IncomingMessage from "../../UI/IncomingMessage";
import OutcomingMessage from "../../UI/OutcomingMessage";
import MainText from "../../shared/Texts/MainText";
import { Event_T, Message_T } from "../../shared/types";
import { useAppSelector } from "../../state/hooks";



const Message = ({message}: {message: Message_T}) => {
    let {user_id} = useAppSelector(state => state.userReducer.user)

    if(message.event === Event_T.connection) {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <MainText>{message.text || ''}</MainText>
        </div>
    }

    if(message.user_id === user_id) {
        return <OutcomingMessage message={message}/>
    } else {
        return <IncomingMessage message={message}/>
    }
}



export default Message