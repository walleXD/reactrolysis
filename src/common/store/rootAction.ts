import { routerActions } from 'connected-react-router'

import { counterActions } from '@modules/counter'
import { themeActions } from '@modules/theme'

export default {
  counter: counterActions,
  router: routerActions,
  theme: themeActions
}
