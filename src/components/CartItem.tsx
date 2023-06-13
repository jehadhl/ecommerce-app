import React from 'react'

import { formatPrice } from '../utils/helpers'
import AmountButtons from './AmountButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
const CartItem = ({id,image,name,color,price,amount}:any) => {
  const {removeItem , toggeleAmount} : any= useCartContext();

  const increase = () => {
    toggeleAmount(id,'inc');
  }

  const decrease = () => {
    toggeleAmount(id,'dec');
  }

  return (
    <article className='grid grid-cols-3 md:grid-cols-12 mb-12 gap-y-12 gap-x-4 items-center justify-center '>
      <div className='md:col-span-3 grid grid-cols-10 md:grid-cols-12 items-center text-left gap-4 md:h-100%'>
        <img className='col-span-3 md:col-span-4 w-full h-75px object-cover rounded block' src={image} alt={name} />
        <div className='col-span-7 md:col-span-8'>
          <h5 className='mb-0 text-xs font-semibold md:text-sm'>
            {name}
          </h5>
          <p className='text-primary-clr-grey-5 text-xs md:text-sm  tracking-wide flex capitalize items-center justify-start'>
            color : <span className='inline-block ml-2 rounded bg-red w-2 h-0.5r md:w-3 md:h-0.75r' style={{background:color}}></span>
          </p>
          <h5 className='mb-0 text-xs text-primary-clr-primary-5 md:hidden'>
            {formatPrice(price)}
          </h5>
        </div>
      </div>

      <h5 className='md:col-span-3 text-center mb-0 text-xs hidden md:block md:text-base md:font-normal text-primary-clr-primary-5'>
            {formatPrice(price)}
      </h5>
      <div className='md:col-span-3 text-center mx-auto'>
        <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      </div>
      <h5 className='mx-auto hidden md:block md:mb-0 md:text-base md:font-normal text-primary-clr-primary-5 md:col-span-2' >
        {formatPrice(price * amount)}
      </h5>
      <button type='button'
              onClick={()=>removeItem(id)}
              className='text-white bg-transparent border-transparent tracking-wide bg-primary-clr-red-dark w-6 h-1.5r flex items-center justify-center rounded cursor-pointer text-xs'
      >
        <FaTrash />
      </button>
    </article>
  )
}

// const Wrapper = styled.article`
//   .subtotal {
//     display: none;
//   }
//   .price {
//     display: none;
//   }
//   display: grid;
//   grid-template-columns: 200px auto auto;
//   grid-template-rows: 75px;
//   gap: 3rem 1rem;
//   justify-items: center;
//   margin-bottom: 3rem;
//   align-items: center;
//   .title {
//     grid-template-rows: 75px;
//     display: grid;
//     grid-template-columns: 75px 125px;
//     align-items: center;
//     text-align: left;
//     gap: 1rem;
//   }
//   img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     border-radius: var(--radius);
//     object-fit: cover;
//   }
//   h5 {
//     font-size: 0.75rem;
//     margin-bottom: 0;
//   }

//   .color {
//     color: var(--clr-grey-5);
//     font-size: 0.75rem;
//     letter-spacing: var(--spacing);
//     text-transform: capitalize;
//     margin-bottom: 0;
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     span {
//       display: inline-block;
//       width: 0.5rem;
//       height: 0.5rem;
//       background: red;
//       margin-left: 0.5rem;
//       border-radius: var(--radius);
//     }
//   }
//   .price-small {
//     color: var(--clr-primary-5);
//   }
//   .amount-btns {
//     width: 75px;
//     button {
//       width: 1rem;
//       height: 0.5rem;
//       font-size: 0.75rem;
//     }
//     h2 {
//       font-size: 1rem;
//     }
//   }
//   .remove-btn {
//     color: var(--clr-white);
//     background: transparent;
//     border: transparent;
//     letter-spacing: var(--spacing);
//     background: var(--clr-red-dark);
//     width: 1.5rem;
//     height: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: var(--radius);
//     font-size: 0.75rem;
//     cursor: pointer;
//   }
//   @media (min-width: 776px) {
//     .subtotal {
//       display: block;
//       margin-bottom: 0;
//       color: var(--clr-grey-5);
//       font-weight: 400;
//       font-size: 1rem;
//     }
//     .price-small {
//       display: none;
//     }
//     .price {
//       display: block;
//       font-size: 1rem;
//       color: var(--clr-primary-5);
//       font-weight: 400;
//     }
//     .name {
//       font-size: 0.85rem;
//     }
//     .color {
//       font-size: 0.85rem;
//       span {
//         width: 0.75rem;
//         height: 0.75rem;
//       }
//     }
//     grid-template-columns: 1fr 1fr 1fr 1fr auto;
//     align-items: center;
//     grid-template-rows: 75px;
//     img {
//       height: 100%;
//     }
//     .title {
//       height: 100%;
//       display: grid;
//       grid-template-columns: 100px 200px;
//       align-items: center;
//       gap: 1rem;
//       text-align: left;
//     }
//     .amount-btns {
//       width: 100px;
//       button {
//         width: 1.5rem;
//         height: 1rem;
//         font-size: 1rem;
//       }
//       h2 {
//         font-size: 1.5rem;
//       }
//     }
//   }
// `

export default CartItem
