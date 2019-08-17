/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'redux-cli-logger' {
  import { Color } from 'colors'
  import { Action, State, Store, Middleware } from 'redux'

  export interface Options {
    downArrow?: string
    rightArrow?: string
    messageColor?: Color
    prevColor?: Color
    actionColor?: Color
    nextColor?: Color
    log?: Console['log']
    // when non-null, only prints if predicate(getState, action) is truthy
    predicate?: (
      getState: Store['getState'],
      action: Action
    ) => boolean | null
    // useful to trim parts of the state atom that are too verbose
    stateTransformer?: (state: State) => State
    // useful to censor private messages (containing password, etc.)
    actionTransformer?: (action: Action) => Action
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
   * ToDo: Add proper return for aliased actions
   * [decleration](https://github.com/hardchor/electron-redux/blob/ff7bfdc2a67cbc8b29d52f34ac4bb129aa551398/packages/electron-redux/src/helpers/createAliasedAction.js#L4)
   */
  export const createAliasedAction: (
    name: string,
    actionCreator: ActionCreator<T>
  ) => any
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
