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
  import { TypeConstant } from 'typesafe-actions'

  export const forwardToMain: Middleware
  export const forwardToMainWithParams: Middleware
  export const forwardToRenderer: Middleware
  export const triggerAlias: Middleware
  export const replayActionMain: (store: Store) => void
  export const replayActionRenderer: (store: Store) => void
  export const getInitialStateRenderer: <S = any>() => S

  type ALIASED = 'ALIASED'

  export interface AliasedAction<T extends TypeConstant> {
    type: ALIASED
    args: any[]
    meta: {
      trigger: T
    }
  }

  export const createAliasedAction: <
    T extends TypeConstant,
    P = any[]
  >(
    name: T,
    actionCreator: ActionCreator
  ) => (...args: P) => AliasedAction<T>
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

  export type LocalScope = 'local'

  export interface Local {
    scope: LocalScope
  }
}

declare module 'storybook-addon-material-ui' {
  export const muiTheme: any
}
