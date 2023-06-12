import { useState, useRef } from "react"
import MainPageTemplate from "../../shared/templates/MainPageTemplate"
import StartTransition from "../../shared/transitions/StartTransition"
import DialogModule from "./components/DialogModule"
import DialogsBar from "./components/DialogsBar"
import styles from './lib/styles.module.css'
import { Event_T, Message_T } from "../../shared/types"
import { useEffect } from 'react'
import v4 from 'uuid'
import { useAppDispatch, useAppSelector } from "../../state/hooks"
import userSlice from "../../state/Reducers/UserReducer"


const ChatPage = () => {

    let { name } = useAppSelector(state => state.userReducer.user)
    const { set_name } = userSlice.actions
    const dispatch = useAppDispatch()

    let [value, setValue] = useState<string>('')

    let login = () => {
        dispatch(set_name(value))
    }

    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <MainPageTemplate>

                <div className={styles.container}>
                    <DialogsBar />
                    <DialogModule />
                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage