import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import Skus from '../components/Skus'
import CartOverview from '../components/CartOverview'
import Header from '../components/AppBar'

const Index = () => (
  <>
    <Header />
    <CssBaseline />
    <main>
      <CartOverview />
      <Skus />
    </main>
  </>
)

export default Index
