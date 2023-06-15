import React, { useContext, useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'
import useLocalStorage from './hooks/useLocalStorage'
import { v4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import userSlice from '../state/Reducers/UserReducer'
import messagesSlice from '../state/Reducers/MessagesReducer'

const SocketContext = React.createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }: { children: any }) => {

    const [user_id] = useLocalStorage('id', v4())

    let dispatch = useAppDispatch()

    let {setConnection} = userSlice.actions

    let {addMessage} = messagesSlice.actions
    let { setUserId } = userSlice.actions
    useEffect(() => {
        if (user_id) {
            dispatch(setUserId(user_id))
        }
    }, [user_id])

    const [socket, setSocket] = useState<Socket<any>>()

    useEffect(() => {
        const newSocket = io(import.meta.env.VITE_BACKEND_URL, {
            query: { user_id }
        })
        setSocket(newSocket)

        return () => newSocket.close() as any
    }, [user_id])
    
    let {dialogs} = useAppSelector(state => state.dialogsReducer)
    useEffect(() => {
        if(socket) {
            socket.on('connect', () => {
                dialogs.forEach(dialog => {
                    socket.emit('join_room', dialog.room_id)
                })
                dispatch(setConnection(true))
            })
            socket.on('disconnect', () => {
                dispatch(setConnection(false))
            })
            socket.on("receive_message", (message: any) => {
                console.log(message)
                dispatch(addMessage(message))
            })
        }
    }, [socket])

    return <>
        <SocketContext.Provider value={socket as any}>
            {children}
        </SocketContext.Provider>
    </>
}