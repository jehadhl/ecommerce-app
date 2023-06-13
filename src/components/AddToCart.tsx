import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({product} : any) => {
  const { addToCart} : any = useCartContext();

  const{id,stock,colors} = product;

  const [mainColor , setMainColor] = useState(colors[0])
  const [amount,setAmount] = useState(1);

  const increase = () => {
    setAmount( (oldAmount)=>{
      let tempAmount = oldAmount +1;
      if(tempAmount > stock)
        tempAmount = stock
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount( (oldAmount)=>{
      let tempAmount = oldAmount - 1;
      if(tempAmount < 1)
        tempAmount = 1
      return tempAmount
    })
  }

  return (
    <section className='mt-8'>
      <div className="grid grid-cols-2 items-center mb-4">
        <span className='capitalize font-bold'> colors : </span>
        <div className='flex'>
          {colors.map( (color :any , index : any)=>{
            return <button key={index}
                           style={{ background : color}}
                           className={`${mainColor === color ? "opacity-100" : 'opacity-50 '}inline-block w-6 h-1.5r rounded-full mr-2 border-0 cursor-pointer flex items-center justify-center bg-primary-clr-black`}
                           onClick={()=> setMainColor(color)}>
                            {mainColor === color ?  <FaCheck className='text-white text-xs' /> : null}
                   </button>
          })}
        </div>
      </div>
      <div className='mt-8'>
          <AmountButtons amount={amount} increase={increase} decrease={decrease} />
          <Link to="/cart"
                className='btn w-36 mt-4'
                onClick={()=>{addToCart(id,mainColor,amount,product)}}>
            add to cart
          </Link>
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   margin-top: 2rem;
//   .colors {
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     align-items: center;
//     margin-bottom: 1rem;
//     span {
//       text-transform: capitalize;
//       font-weight: 700;
//     }
//     div {
//       display: flex;
//     }
//   }
//   .color-btn {
//     display: inline-block;
//     width: 1.5rem;
//     height: 1.5rem;
//     border-radius: 50%;
//     background: #222;
//     margin-right: 0.5rem;
//     border: none;
//     cursor: pointer;
//     opacity: 0.5;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     svg {
//       font-size: 0.75rem;
//       color: var(--clr-white);
//     }
//   }
//   .active {
//     opacity: 1;
//   }
//   .btn-container {
//     margin-top: 2rem;
//   }

//   .btn {
//     margin-top: 1rem;
//     width: 140px;
//   }
// `
export default AddToCart
