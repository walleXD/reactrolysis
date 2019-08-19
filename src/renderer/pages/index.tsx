import React, { ReactElement } from 'react'
import { Route } from 'react-router'

import Switch from '../components/Switch'
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
