import loggedAPI from "../api/actions/loggedAPI"


const loggedCheck = async () => {
    try {
        await loggedAPI()
    } catch(e) {
        console.log(e)
    }
}

export default loggedCheck