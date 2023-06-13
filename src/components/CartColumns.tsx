import React from 'react'


const CartColumns = () => {
  return (
    <div className='hidden md:block'>
      <div className='grid grid-cols-12 justify-center gap-4'>
        <h5 className='text-center col-span-3 text-primary-clr-grey-5 font-normal mb-3 capitalize text-sm tracking-wide'>
          item
        </h5>

        <h5 className='text-center col-span-3 text-primary-clr-grey-5 font-normal mb-3 capitalize text-sm tracking-wide'>
          price
        </h5>

        <h5 className='text-center col-span-3 text-primary-clr-grey-5 font-normal mb-3 capitalize text-sm tracking-wide'>
          quantity
        </h5>

        <h5 className='text-center col-span-2 text-primary-clr-grey-5 font-normal mb-3 capitalize text-sm tracking-wide'>
          subtotal
        </h5>
        <span className='text-center col-span-1 w-8 h-2r'>

        </span>
      </div>
      <hr className='mt-4 mb-12' />
    </div>

  )
}

// const Wrapper = styled.div`
//   display: none;
//   @media (min-width: 776px) {
//     display: block;
//     .content {
//       display: grid;
//       grid-template-columns: 316px 1fr 1fr 1fr auto;
//       justify-items: center;
//       column-gap: 1rem;
//       h5 {
//         color: var(--clr-grey-5);
//         font-weight: 400;
//       }
//     }

//     span {
//       width: 2rem;
//       height: 2rem;
//     }
//     hr {
//       margin-top: 1rem;
//       margin-bottom: 3rem;
//     }
//   }
// `

export default CartColumns
