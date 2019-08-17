import React, { ReactElement } from 'react'
import { Typography, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { themeActions } from '../../common/features/theme'
import Layout from '../components/Layout'

const SettingsPage = (): ReactElement => {
  const dispatch = useDispatch()

  return (
    <Layout title="Settings">
      <Button
        onClick={(): void => {
          dispatch(themeActions.toggle())
        }}
      >
        Toggle
      </Button>
      <Typography>Settings</Typography>
    </Layout>
  )
}

export default SettingsPage
