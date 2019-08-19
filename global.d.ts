/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'redux-cli-logger' {
  import { Action, State, Store, Middleware } from 'redux'

  export interface Options {
    downArrow?: string
    rightArrow?: string
    messageColor?: string
    prevColor?: string
    actionColor?: string
    nextColor?: string
    log?: Console['log']
    // when non-null, only prints if predicate(getState, action) is truthy
    predicate?: (
      getState: Store['getState'],
      action: Action
    ) => boolean | null
    // useful to trim parts of the state atom that are too verbose
    stateTransformer?: (state: State) => any
    // useful to censor private messages (containing password, etc.)
    actionTransformer?: (action: Action) => any
  }

  export default (options?: Options) => Middleware
}

declare module 'electron-redux' {
  import { Store, Middleware, ActionCreator } from 'redux'
  import { ActionBuilder } from 'typesafe-actions'

  export const forwardToMain: Middleware
  export const forwardToMainWithParams: Middleware
  export const forwardToRenderer: Middleware
  export const triggerAlias: Middleware
  export const replayActionMain: (store: Store) => void
  export const replayActionRenderer: (store: Store) => void
  export const getInitialStateRenderer: () => any

  /**
   * ToDo: improve return type for Aliased Action
   * [decleration](https://github.com/hardchor/electron-redux/blob/ff7bfdc2a67cbc8b29d52f34ac4bb129aa551398/packages/electron-redux/src/helpers/createAliasedAction.js#L4)
   */

  export type ALIASED = 'ALIASED'

  export interface AliasedAction {
    type: ALIASED
    args: any[]
    meta: {
      trigger: string
    }
  }

  export const createAliasedAction: (
    name: string,
    actionCreator: ActionCreator<T>
  ) => (...args: any[]) => AliasedAction
}

declare module 'AppReduxTypes' {
  import { StateType, ActionType } from 'typesafe-actions'

  export type Store = StateType<
    typeof import('./src/common/store/index').default
  >
  export type RootAction = ActionType<
    typeof import('./src/common/store/rootAction').default
  >
  export type RootState = StateType<
    ReturnType<
      typeof import('./src/common/store/rootReducer').default
    >
  >
}

declare module 'storybook-addon-material-ui' {
  export const muiTheme: any
}
