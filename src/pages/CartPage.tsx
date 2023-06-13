import React from 'react'

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
  const {cart} = useCartContext();

  if(cart.length < 1){
    return <main className='page-100'>
      <div className='text-center'>
        <h2 className='mb-4 transform-none tracking-wide capitalize mb-8 leading-5 text-4xl font-bold'>
          Your cart is empty
        </h2>
        <Link to='/products' className='btn'>
          fill it
        </Link>
      </div>

    </main>
  }

  return <main>
    <PageHero title="cart" />
    <main className='page'>
      <CartContent />
    </main>
  </main>


}

// const Wrapper = styled.main`
//   .empty {
//     text-align: center;
//     h2 {
//       margin-bottom: 1rem;
//       text-transform: none;
//     }
//   }
// `

export default CartPage
