import React from 'react'

import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="Checkout" />
      <div className="page">
        <h1 className="tracking-wide capitalize mb-7 leading-5 text-5xl font-bold">
          Checkout page
        </h1>
      </div>
    </main>
  )
}
// const Wrapper = styled.div``
export default CheckoutPage
