import { routerActions } from 'connected-react-router'

import { counterActions } from '@modules/counter'
import { themeActions } from '@modules/theme'
import { settingsActions } from '@modules/settings'

export default {
  counter: counterActions,
  router: routerActions,
  theme: themeActions,
  settings: settingsActions
}
