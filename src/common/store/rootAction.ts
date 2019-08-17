import { routerActions } from 'connected-react-router'

import { counterActions } from '../features/counter'
import { themeActions } from '../features/theme'

export default {
  counter: counterActions,
  router: routerActions,
  theme: themeActions
}
