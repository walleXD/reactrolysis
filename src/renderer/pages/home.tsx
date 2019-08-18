import React, { ReactElement } from 'react'

import Layout from '../containers/Layout'
import { LoadCounter as Counter } from '@modules/counter'

const HomePage = (): ReactElement => (
  <Layout>
    <Counter />
  </Layout>
)

export default HomePage
