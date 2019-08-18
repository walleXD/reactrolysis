import React, { ReactElement } from 'react'

import Layout from '../components/Layout'
import Counter from '../features/counter/LoadCounter'

const HomePage = (): ReactElement => (
  <Layout>
    <Counter />
  </Layout>
)

export default HomePage
