import React from 'react'

import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const {total_amount , shipping_fee} = useCartContext();
  const {myUser,loginWithRedirect} : any = useUserContext();

  return (
    <section className='mt-12 flex justify-center md:justify-end'>
      <div >
        <article className='border border-primary-clr-grey-8 rounded py-6 px-12'>
          <h5 className='grid grid-cols-2 font-bold mb-3 capitalize text-sm tracking-wide'>
            subtotal : <span className='text-center'>{formatPrice(total_amount)}</span>
          </h5>
          <p className='grid grid-cols-2 font-bold mb-8 leading-8'>
            shipping fee : <span className='text-center'>{formatPrice(shipping_fee)}</span>
          </p>
          <hr/>
          <h4 className='text-xl capitalize tracking-wide leading-5 mb-3 mt-8 font-bold grid grid-cols-2'>
            order total : {' '}
            <span className='text-center'>
              {formatPrice(total_amount + shipping_fee)}
            </span>
          </h4>
        </article>
        {myUser ?
          <Link to='/checkout' className='btn font-bold mt-4 text-center w-full'>
            proceed to checkout
          </Link>
        :
          <button type='button' onClick={loginWithRedirect} className='btn font-bold mt-4 text-center w-full'>
            login
          </button>
        }

      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   article {
//     border: 1px solid var(--clr-grey-8);
//     border-radius: var(--radius);
//     padding: 1.5rem 3rem;
//   }
//   h4,
//   h5,
//   p {
//     display: grid;
//     grid-template-columns: 200px 1fr;
//   }
//   p {
//     text-transform: capitalize;
//   }
//   h4 {
//     margin-top: 2rem;
//   }
//   @media (min-width: 776px) {
//     justify-content: flex-end;
//   }
//   .btn {
//     width: 100%;
//     margin-top: 1rem;
//     text-align: center;
//     font-weight: 700;
//   }
// `

export default CartTotals
