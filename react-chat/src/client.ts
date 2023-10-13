import io from 'socket.io-client'
import socketio from '@nxpkg/socketio-client'
import { createClient } from 'nxpkg-chat'

export * from 'nxpkg-chat'

const connection = socketio(io('http://localhost:3030'))

export const client = createClient(connection)
