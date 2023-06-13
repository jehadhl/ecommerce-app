import React from 'react'

import { Filters, ProductList, Sort, PageHero } from '../components'

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className='page '>
        <div className='section-center grid gap-y-12 gap-x-6 my-16 mx-auto sm:grid-flow-col'>
          <Filters />
          <div>
            <Sort/>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}

// const Wrapper = styled.div`
//   .products {
//     display: grid;
//     gap: 3rem 1.5rem;
//     margin: 4rem auto;
//   }
//   @media (min-width: 768px) {
//     .products {
//       grid-template-columns: 200px 1fr;
//     }
//   }
// `

export default ProductsPage
