import React, { ReactElement } from 'react'
import { Typography, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { settingsActions } from '@modules/settings'
import Layout from '../containers/Layout'

const SettingsPage = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <Layout title="Settings">
      <Button
        onClick={(): void => {
          dispatch(settingsActions.openStorybookWindow())
        }}
      >
        Toggle
      </Button>
      <Typography>Settings</Typography>
    </Layout>
  )
}

export default SettingsPage
