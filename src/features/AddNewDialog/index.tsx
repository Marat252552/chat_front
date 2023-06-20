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

type Values_T = {
    name: string,
    room_id: string
}

const AddNewDialogButton = memo(() => {

    const socket = useSocket() as any

    let { user_id } = useAppSelector(state => state.userReducer.user)

    const { addDialog } = dialogsSlice.actions
    const dispatch = useAppDispatch()

    let [active, setActive] = useState(false)
    const toggleActive = () => {
        setActive(prev => !prev)
    }

    let { register, handleSubmit, reset } = useForm<Values_T>()
    let onSubmit = ({ name, room_id }: Values_T) => {
        if(!room_id || !socket || !user_id) return
        roomConnect(room_id, socket, user_id)
        dispatch(addDialog({ name, room_id }))
        setActive(false)
        reset()
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>

                {active && <>

                    <div className={styles.hidden_module}>
                        <FilledInput
                            {...register('room_id', {
                                required: true
                            })}
                            autoComplete='off'
                            placeholder="Уникальный ID"
                        />
                        <FilledInput
                            {...register('name', {
                                required: true
                            })}
                            autoComplete='off'
                            placeholder="Название"
                        />

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