import React from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa'

const AmountButtons = ({amount , increase , decrease} : any) => {
  return (
    <div className='amoubt-btns grid w-36 items-center grid-cols-3 justify-center'>
      <button type='button'
              className='amount-btn bg-transparent border-transparent cursor-pointer py-4 px-0 w-8 h-1r flex items-center justify-center text-center border rounded focus:border-primary-clr-black'
              onClick={decrease} >
        <FaMinus/>
      </button>
      <h2 className='mb-0 tracking-wide capitalize text-3xl font-semibold items-center justify-center text-center'>{amount}</h2>
      <button type='button'
              className='amount-btn bg-transparent border-transparent cursor-pointer py-4 px-0 w-8 h-1r flex items-center justify-center text-center border rounded focus:border-primary-clr-black'
              onClick={increase} >
        <FaPlus/>
      </button>

    </div>
  )
}

// const Wrapper = styled.div`
//   display: grid;
//   width: 140px;
//   justify-items: center;
//   grid-template-columns: repeat(3, 1fr);
//   align-items: center;
//   h2 {
//     margin-bottom: 0;
//   }
//   button {
//     background: transparent;
//     border-color: transparent;
//     cursor: pointer;
//     padding: 1rem 0;
//     width: 2rem;
//     height: 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   h2 {
//     margin-bottom: 0;
//   }
// `

export default AmountButtons
