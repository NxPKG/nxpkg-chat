// For more information about this file see https://nxpkg.khulnasoft.com/guides/cli/client.html
import { nxpkg } from '@nxpkg/nxpkg'
import type { TransportConnection, Application } from '@nxpkg/nxpkg'
import authenticationClient from '@nxpkg/authentication-client'
import type { AuthenticationClientOptions } from '@nxpkg/authentication-client'

import { messageClient } from './services/messages/messages.shared'
export type { Message, MessageData, MessageQuery, MessagePatch } from './services/messages/messages.shared'

import { userClient } from './services/users/users.shared'
export type { User, UserData, UserQuery, UserPatch } from './services/users/users.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the nxpkg-chat app.
 *
 * @param connection The REST or Socket.io Nxpkg client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://nxpkg.khulnasoft.com/api/client.html
 * @returns The Nxpkg client application
 */
export const createClient = <Configuration = any>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = nxpkg()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)
  client.configure(messageClient)
  return client
}
