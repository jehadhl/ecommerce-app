import React from 'react'

import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({id,name,price,image}:any) => {
  return (
    <article className=''>
      <div className='relative bg-black rounded group'>
        <img className='w-full h-225px block rounded object-cover transition duration-300 ease-linear group-hover:opacity-50' src={image} alt={name} />
        <Link to={`/products/${id}`}
              className="absolute top-1/2 left-1/2 bg-primary-clr-primary-5 flex items-center justify-center w-10 h-2.5r rounded cursor-pointer opacity-0 transition duration-300 ease-linear -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100" >
          <FaSearch className='text-xl text-white'/>
        </Link>
      </div>
      <footer className='flex mt-4 items-center justify-between'>
        <h5 className='font-semibold mb-0 capitalize text-sm tracking-wide'>{name}</h5>
        <p className='font-semibold mb-0 text-primary-clr-primary-5 tracking-wide'>{formatPrice(price)}</p>
      </footer>
    </article>
  )
}

// const Wrapper = styled.article`
//   .container {
//     position: relative;
//     background: var(--clr-black);
//     border-radius: var(--radius);
//   }
//   img {
//     width: 100%;
//     display: block;
//     object-fit: cover;
//     border-radius: var(--radius);
//     transition: var(--transition);
//   }
//   .link {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background: var(--clr-primary-5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     transition: var(--transition);
//     opacity: 0;
//     cursor: pointer;
//     svg {
//       font-size: 1.25rem;
//       color: var(--clr-white);
//     }
//   }
//   .container:hover img {
//     opacity: 0.5;
//   }
//   .container:hover .link {
//     opacity: 1;
//   }
//   footer {
//     margin-top: 1rem;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }
//   footer h5,
//   footer p {
//     margin-bottom: 0;
//     font-weight: 400;
//   }

//   footer p {
//     color: var(--clr-primary-5);
//     letter-spacing: var(--spacing);
//   }
// `
export default Product
