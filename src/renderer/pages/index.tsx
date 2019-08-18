import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router'

import HomePage from './home'
import SettingsPage from './settings'

/** main routing component */
const Pages = (): ReactElement => (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/settings" component={SettingsPage} />
  </Switch>
)

export default Pages
