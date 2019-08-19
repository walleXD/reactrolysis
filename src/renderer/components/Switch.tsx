import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { Switch as DisconnectedSwitch } from 'react-router'

const mapStateToProps = createSelector(
  ({ router }) => router,
  router => ({ ...router })
)

const Switch = connect(mapStateToProps)(DisconnectedSwitch)

export default Switch
