import { routerActions } from 'connected-react-router'

import { counterActions } from '../features/counter'

export default {
  counter: counterActions,
  router: routerActions
}
