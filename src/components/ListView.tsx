import React from 'react'

import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({products} :any) => {
  return (
    <section className='grid gap-y-12'>
      {products.map( (product :any)=>{
        const {id,image,name,price,description} = product;
        return <article className='md:grid md:grid-flow-col md:items-center gap-x-8' key={id}>
          <img src={image} alt={name}
               className="block w-80 h-225px object-cover rounded mb-4"
          />
          <div className=''>
            <h4 className='font-semibold mb-2 capitalize text-lg tracking-wide'>
              {name}
            </h4>
            <h5 className='font-semibold mb-3 text-primary-clr-primary-6 capitalize text-sm tracking-wide'>
              {formatPrice(price)}
            </h5>
            <p className='mb-4 max-w-3xl'>
              {description.substring(0,150)}...
            </p>
            <Link to={`/products/${id}`} className="btn py-1 px-2 text-xs">
              Details
            </Link>
          </div>
        </article>
      })}
    </section>
  )
}

// const Wrapper = styled.section`
//   display: grid;
//   row-gap: 3rem;

//   img {
//     width: 100%;
//     display: block;
//     width: 300px;
//     height: 200px;
//     object-fit: cover;
//     border-radius: var(--radius);
//     margin-bottom: 1rem;
//   }
//   h4 {
//     margin-bottom: 0.5rem;
//   }
//   .price {
//     color: var(--clr-primary-6);
//     margin-bottom: 0.75rem;
//   }
//   p {
//     max-width: 45em;
//     margin-bottom: 1rem;
//   }
//   .btn {
//     font-size: 0.5rem;
//     padding: 0.25rem 0.5rem;
//   }
//   @media (min-width: 992px) {
//     article {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       column-gap: 2rem;
//       align-items: center;
//     }
//   }
// `

export default ListView
