// For more information about this file see https://nxpkg.khulnasoft.com/guides/cli/typescript.html
import { HookContext as NxpkgHookContext, NextFunction } from '@nxpkg/nxpkg'
import { Application as NxpkgApplication } from '@nxpkg/koa'
import { ApplicationConfiguration } from './configuration'

import { User } from './services/users/users'

export { NextFunction }

// The types for app.get(name) and app.set(name)
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Configuration extends ApplicationConfiguration {}

// A mapping of service names to types. Will be extended in service files.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ServiceTypes {}

// The application instance type that will be used everywhere else
export type Application = NxpkgApplication<ServiceTypes, Configuration>

// The context for hook functions - can be typed with a service class
export type HookContext<S = any> = NxpkgHookContext<Application, S>

// Add the user as an optional property to all params
declare module '@nxpkg/nxpkg' {
  interface Params {
    user?: User
  }
}
