import React from 'react'

import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart,clearCart} : any = useCartContext();
  return (
    <section className='section section-center'>
        <CartColumns/>
        {cart.map( (item : any)=> {
          return <CartItem key={item.id} {...item} />
        })}
        <hr/>
        <div className='flex justify-between mt-8'>
          <Link to="/products"
                className='bg-transparent border-transparent capitalize py-1 px-2 rounded text-white tracking-wide font-normal bg-primary-clr-primary-5 cursor-pointer'
          >
            continue shopping
          </Link>
          <button type='button'
                  onClick={clearCart}
                  className='bg-transparent border-transparent capitalize py-1 px-2 rounded text-white tracking-wide font-normal bg-black cursor-pointer'
          >
            clear shopping cart
          </button>
        </div>
        <CartTotals/>
    </section>
  )
}
// const Wrapper = styled.section`
//   .link-container {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 2rem;
//   }
//   .link-btn {
//     background: transparent;
//     border-color: transparent;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//     background: var(--clr-primary-5);
//     color: var(--clr-white);
//     border-radius: var(--radius);
//     letter-spacing: var(--spacing);
//     font-weight: 400;
//     cursor: pointer;
//   }
//   .clear-btn {
//     background: var(--clr-black);
//   }
// `
export default CartContent
