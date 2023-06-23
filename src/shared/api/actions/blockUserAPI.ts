import instanse from "../Instanse"


const blockUserAPI = (operand_user_id: string) => {
    return instanse.post('/chat/users/block', {operand_user_id})
}

export default blockUserAPI