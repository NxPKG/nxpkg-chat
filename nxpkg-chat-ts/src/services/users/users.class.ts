// For more information about this file see https://nxpkg.khulnasoft.com/guides/cli/service.class.html#database-services
import type { Params } from '@nxpkg/nxpkg'
import { KnexService } from '@nxpkg/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@nxpkg/knex'

import type { Application } from '../../declarations'
import type { User, UserData, UserPatch, UserQuery } from './users.schema'

export type { User, UserData, UserPatch, UserQuery }

export interface UserParams extends KnexAdapterParams<UserQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class UserService<ServiceParams extends Params = UserParams> extends KnexService<
  User,
  UserData,
  UserParams,
  UserPatch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'users'
  }
}
