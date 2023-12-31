import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {grid_view , filtered_products:products = []} = useFilterContext()


  if(products.length < 1 )
    return (
      <h5 className='tracking-wide mb-3 normal-case text-sm font-semibold'>
        Sorry, no products matched your search....
      </h5>
    )

  if(grid_view === false)
      return ( <ListView products={products} />)

  return (<GridView products={products} />)
}

export default ProductList
