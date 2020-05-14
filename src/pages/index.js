import React from 'react'

import Skus from '../components/Products/Skus'
import CartOverview from '../components/CartOverview'
import Header from '../components/AppBar'

import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const Index = () => (
    <CartProvider
      stripe={stripePromise}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <Header />
      <CartOverview />
      <Skus />
    </CartProvider>
)

export default Index
