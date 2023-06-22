import styles from './lib/styles.module.css'
import { memo, useState } from 'react'
import dialogsSlice from "../../state/Reducers/DialogsReducer"
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import { useSocket } from "../../shared/SocketProvider"
import FilledInput from "../../UI/FilledInput"
import { useForm } from "react-hook-form"
import roomConnect from "./processes/roomConnect"
import SubmitButton from "./elements/SubmitButton"
import OpenFormButton from "./elements/OpenFormButton"
import CloseFormButton from "./elements/CloseFormButton"
import addRoomAPI from '../../shared/api/actions/addRoomAPI'
import {message} from 'antd'
import getRoomsAPI from '../../shared/api/actions/getRoomsAPI'


type Values_T = {
    name: string,
    in_user_id: string
}

const AddNewDialogButton = memo(() => {

    const socket = useSocket() as any

    let { user_id: out_user_id } = useAppSelector(state => state.userReducer.user)

    const { addDialog } = dialogsSlice.actions
    const dispatch = useAppDispatch()

    let [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(prev => !prev)
    }

    let { register, handleSubmit, reset } = useForm<Values_T>()
    let onSubmit = async ({ in_user_id }: Values_T) => {
        if (!in_user_id || !socket || !out_user_id) return
        try {
            await addRoomAPI({ in_user_id, out_user_id })

            let {data} = await getRoomsAPI()
            data.rooms.forEach(room => {
                const {name, room_id} = room
                dispatch(addDialog({ name, room_id }))
                roomConnect(room_id, socket, out_user_id!)
            })    
            
        } catch (e: any) {
            const message_info = e.response.data.message || 'Произошла непредвиденная ошибка'
            console.log(e)
            message.error(message_info)
        }
        setActive(false)
        reset()
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>

                {active && <>

                    <div className={styles.hidden_module}>
                        <FilledInput
                            {...register('in_user_id', {
                                required: true
                            })}
                            autoComplete='off'
                            placeholder="Уникальный ID пользователя"
                        />
                        {/* <FilledInput
                            {...register('name', {
                                required: true
                            })}
                            autoComplete='off'
                            placeholder="Название"
                        /> */}

                        <SubmitButton />

                    </div>
                </>}

                <div onClick={toggleActive} style={{ width: '100%', cursor: 'pointer' }}>
                    {
                        active ?
                            <CloseFormButton />
                            :
                            <OpenFormButton />
                    }
                </div>

            </div>
        </form>
    </>
})

export default AddNewDialogButton