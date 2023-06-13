import React from 'react'

import Product from './Product'

const GridView = ({products = [] }:any) => {
  return (
    <section>
      <div className='grid gap-y-8 gap-x-6 xl:grid-cols-3 sm:grid-cols-2'>
        {products.map( (product :any)=>(
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   img {
//     height: 175px;
//   }

//   .products-container {
//     display: grid;
//     gap: 2rem 1.5rem;
//   }

//   @media (min-width: 992px) {
//     .products-container {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media (min-width: 1170px) {
//     .products-container {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// `

export default GridView
