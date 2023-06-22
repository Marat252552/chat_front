import React, { useContext, useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'
import { v4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import userSlice from '../state/Reducers/UserReducer'
import messagesSlice from '../state/Reducers/MessagesReducer'
import { Event_T, Message_T } from './types'

const SocketContext = React.createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }: { children: any }) => {

    let { user_id } = useAppSelector(state => state.userReducer.user)

    let dispatch = useAppDispatch()
    let { setConnection } = userSlice.actions
    let { addMessage } = messagesSlice.actions

    const [socket, setSocket] = useState<Socket<any>>()
    let { dialogs } = useAppSelector(state => state.dialogsReducer)

    useEffect(() => {
        if (!user_id) return
        const newSocket = io(import.meta.env.VITE_BACKEND_URL, {
            query: { user_id }
        })
        setSocket(newSocket)

        return () => newSocket.close() as any
    }, [user_id])

    useEffect(() => {
        if (!socket) return
        dialogs.forEach(dialog => {
            let data = {
                message: {
                    user_id,
                    event: Event_T.user_connected,
                    date: new Date(),
                    text: 'Новый пользователь успешно присоединился',
                    room_id: dialog.room_id,
                    message_id: () => v4()
                },
                user_id,
                room_id: dialog.room_id
            }

            socket.emit('join_room', data)
        })
    }, [dialogs])

    useEffect(() => {
        if (!socket) return
        socket.on('connect', () => {
            dialogs.forEach(dialog => {
                let data = {
                    user_id,
                    room_id: dialog.room_id
                }
                socket.emit('join_room', data)
            })
            dispatch(setConnection(true))
        })
        socket.on('disconnect', () => {
            dispatch(setConnection(false))
        })
        socket.on("receive_message", (message: any) => {
            dispatch(addMessage(message))
        })
        socket.on("receive_image", (image_data: Message_T) => {
            console.log('image recieved')
            dispatch(addMessage(image_data))
        })
        socket.on("user_connected", (message: Message_T) => {
            dispatch(addMessage(message))
        })
    }, [socket, dialogs])

    return <>
        <SocketContext.Provider value={socket as any}>
            {children}
        </SocketContext.Provider>
    </>
}