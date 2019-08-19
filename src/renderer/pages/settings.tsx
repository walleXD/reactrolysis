import React, { ReactElement } from 'react'
import { Typography, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { themeActions } from '@modules/theme'
import Layout from '../containers/Layout'

const SettingsPage = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <Layout title="Settings">
      <Button
        onClick={(): void => {
          dispatch(themeActions.setNativeTheme())
        }}
      >
        Toggle
      </Button>
      <Typography>Settings</Typography>
    </Layout>
  )
}

export default SettingsPage
