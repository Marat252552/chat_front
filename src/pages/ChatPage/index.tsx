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
import MainText from "../../shared/Texts/MainText"
import {connect} from 'socket.io-client'



const ChatPage = () => {

        let { name } = useAppSelector(state => state.userReducer.user)

    let { currentDialog } = useAppSelector(state => state.dialogsReducer)

    return <>
        <StartTransition />
        <div className={styles.background_container}>
            <MainPageTemplate>

                <div className={styles.container}>
                    <DialogsBar />
                    {
                        (!currentDialog.room_id) ?
                            <div style={{width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                                <MainText>No dialog is chosen</MainText>
                            </div>
                            :
                            <DialogModule />
                    }

                </div>

            </MainPageTemplate>
        </div>
    </>
}

export default ChatPage