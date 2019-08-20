import { combineEpics } from 'redux-observable'

import { counterEpics } from '@modules/counter'

export default combineEpics(...counterEpics)
