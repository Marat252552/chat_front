import React, { useContext, useState, useEffect } from 'react'
import io, { Socket } from 'socket.io-client'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import userSlice from '../state/Reducers/UserReducer'
import messagesSlice from '../state/Reducers/MessagesReducer'
import { Message_T } from './types'
import dialogsSlice from '../state/Reducers/DialogsReducer'
import getRoomsAPI from './api/actions/getRoomsAPI'

const SocketContext = React.createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }: { children: any }) => {

    let { user_id } = useAppSelector(state => state.userReducer.user)

    let dispatch = useAppDispatch()
    let { setConnection } = userSlice.actions
    let { addDialog, loadDialogsBundle } = dialogsSlice.actions
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

        socket.on("update_rooms", async () => {
            console.log('update rooms')
            try {
                const { data } = await getRoomsAPI()
                if (!data.rooms) return
                dispatch(loadDialogsBundle(data.rooms))
                data.rooms.forEach(room => {
                    let data = {
                        user_id,
                        room_id: room.room_id
                    }
                    socket.emit('join_room', data)
                })
            } catch (e) {
                console.log(e)
            }
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