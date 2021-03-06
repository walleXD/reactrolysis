import React, { ReactElement } from 'react'

import Layout from '../containers/Layout'
import { Counter } from '@modules/counter'

const HomePage = (): ReactElement => (
  <Layout>
    <Counter />
  </Layout>
)

export default HomePage
