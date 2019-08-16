import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../components/Layout'

const HomePage = (): ReactElement => (
  <Layout title="Home">
    <Typography>Home</Typography>
  </Layout>
)

export default HomePage
