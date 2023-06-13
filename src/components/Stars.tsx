import React from 'react'

import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({stars,reviews} : any) => {
  const tempStars = Array.from({length:5},(_,index)=> {
   const number = index +0.5;
   return <span key={index} className='mr-1 text-base text-primary-clr-star'>
          {stars >= index + 1 ? <BsStarFill/> : stars >= number ? <BsStarHalf/> : <BsStar /> }
        </span>
  })

  return (
    <div className='flex items-center mb-2'>
      <div className='grid grid-cols-5'>
        {tempStars}
      </div>
      <p className='reviews ml-2 mb-0'>({reviews} customer reviews)</p>
    </div>
  )
}

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     color: #ffb900;
//     font-size: 1rem;
//     margin-right: 0.25rem;
//   }
//   p {
//     margin-left: 0.5rem;
//     margin-bottom: 0;
//   }
//   margin-bottom: 0.5rem;
// `
export default Stars
