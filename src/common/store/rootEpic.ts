import { combineEpics } from 'redux-observable'

import { counterEpics } from '@modules/counter'
import { settingsEpics } from '@modules/settings'

export default combineEpics(
  ...counterEpics,
  ...settingsEpics
)
