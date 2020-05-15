import React from 'react'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'
import Header from '../components/AppBar'

const Index = () => (
  <>
    <Header />
    <CartOverview />
    <Skus />
  </>
)

export default Index
