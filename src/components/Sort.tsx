import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'

const Sort = () => {
  const {filtered_products:products,
         grid_view ,
         setGridView ,
         setListView,
         sort,
         updateSort} = useFilterContext();

  return (
    <section className='grid grid-cols-1 items-center mb-8 gap-x-8 sm:grid-cols-12 sm:gap-y-3 md:gap-x-8'>
      <div className='col-span-1 grid grid-cols-2 gap-x-2 sm:w-14'>
        <button className={`${grid_view ? 'text-white bg-primary-clr-black ' : 'text-primary-clr-black bg-transparent ' }  border border-primary-clr-black  w-6 flex rounded h-1.5r items-center justify-center cursor-pointer`}
                onClick={setGridView} >
          <BsFillGridFill className='text-base' />
        </button>
        <button className={`${!grid_view ? 'text-white bg-primary-clr-black ' : 'text-primary-clr-black bg-transparent ' }  border border-primary-clr-black  w-6 flex rounded h-1.5r items-center justify-center cursor-pointer`}
                onClick={setListView} >
          <BsList className={`${!grid_view ? 'text-base text-white' : ''}`} />
        </button>
      </div>
      <p className='col-span-2 mb-0 capitalize'>{products.length} products found</p>
      <hr className='col-span-6 border-t text-primary-clr-grey-8 border-primary-clr-grey-8' />
      <form className='col-span-3'>
        <label htmlFor='sort' className='text-base capitalize font-bold mr-1'>sort by</label>
        <select name='sort'
                id="sort"
                value={sort}
                onChange={updateSort}
                className='border-transparent capitalize text-base py-1 px-2 bg-primary-clr-grey-10'>
          <option value="price-lowest" >price (lowest)</option>
          <option value="price-highest" >price (highest)</option>
          <option value="name-a" >name (a-z)</option>
          <option value="name-z" >name (z-a)</option>
        </select>
      </form>
    </section>
)
}

// const Wrapper = styled.section`
//   display: grid;
//   grid-template-columns: auto auto 1fr auto;
//   align-items: center;
//   margin-bottom: 2rem;
//   column-gap: 2rem;
//   @media (max-width: 576px) {
//     display: grid;
//     grid-template-columns: 1fr;
//     row-gap: 0.75rem;
//     .btn-container {
//       width: 50px;
//     }
//     label {
//       display: inline-block;
//       margin-right: 0.5rem;
//     }
//   }
//   @media (min-width: 768px) {
//     column-gap: 2rem;
//   }
//   p {
//     text-transform: capitalize;
//     margin-bottom: 0;
//   }

//   .btn-container {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     column-gap: 0.5rem;
//     button {
//       background: transparent;
//       border: 1px solid var(--clr-black);
//       color: var(--clr-black);
//       width: 1.5rem;
//       border-radius: var(--radius);
//       height: 1.5rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       cursor: pointer;
//       svg {
//         font-size: 1rem;
//       }
//     }
//     .active {
//       background: var(--clr-black);
//       color: var(--clr-white);
//     }
//   }

//   .sort-input {
//     border-color: transparent;
//     font-size: 1rem;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//   }
//   label {
//     font-size: 1rem;
//     text-transform: capitalize;
//   }
// `

export default Sort
