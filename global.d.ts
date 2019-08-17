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
