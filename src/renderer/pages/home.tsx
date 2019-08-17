import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'

import Layout from '../components/Layout'
import Counter from '../features/counter/LoadCounter'

const HomePage = (): ReactElement => (
  <Layout>
    <Typography>Home</Typography>
    <Counter />
  </Layout>
)

export default HomePage
