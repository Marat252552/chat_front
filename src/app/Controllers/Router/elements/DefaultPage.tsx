import { Navigate } from 'react-router-dom'


const DefaultPage = ({user_id}: {user_id: string | undefined}) => {

    if(user_id) return <Navigate to='/chat' />

    return <Navigate to='/landing' />

}

export default DefaultPage