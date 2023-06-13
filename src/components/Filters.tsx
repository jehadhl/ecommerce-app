import React from 'react'

import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}

const Filters = () => {
  const {filters:{
            text,
            category,
            company,
            color,
            min_price,
            price,
            max_price,
            shipping
          },
          updateFilters,
          clearFilters,
          all_products
        } = useFilterContext();


  const categories = getUniqueValues(all_products,'category');
  const companies = getUniqueValues(all_products,'company');
  const colors = getUniqueValues(all_products,'colors');

  return (
    <section>
      <div className='content md:sticky md:top-4'>
        <form onSubmit={(e)=> e.preventDefault()}>
          {/* search input */}
          <div className='mb-5'>
            <input type="text"
                   name="text"
                   placeholder='Search'
                   className='p-2 bg-primary-clr-grey-10 rounded border-transparent tracking-wide placeholder:capitalize'
                   value={text}
                   onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className='mb-5'>
            <h5 className='font-semibold mb-3 text-primary-clr-primary-6 capitalize text-sm tracking-wide'>
              category
            </h5>
            <div>
              {categories.map( (c : any,index)=>{
                  return <button key={index}
                                className={classNames(
                                  "block my-1 mx-0 py-1 px-0 capitalize bg-transparent text-primary-clr-grey-5 cursor-pointer tracking-wide",
                                  category === c.toLowerCase() ? "border-b border-b-primary-clr-grey-5" : "border-b-transparent",
                                )}
                                onClick={updateFilters}
                                name="category"
                                type='button'
                          >
                          {c}
                         </button>
              })}
            </div>
          </div>
          {/* end of categories */}
          {/* companies */}
          <div className='mb-5'>
            <h5 className='font-semibold mb-3 text-primary-clr-primary-6 capitalize text-sm tracking-wide'>
              company
            </h5>
            <select name="company"
                    className='rounded bg-primary-clr-grey-10 p-1 border-transparent'
                    value={company}
                    onChange={updateFilters}
            >
              {companies.map( (c : any,index)=>{
                  return <option key={index}
                                value={c}
                          >
                          {c}
                         </option>
              })}
            </select>
          </div>
          {/* end of companies */}
          {/* colors */}
          <div className='mb-5'>
            <h5 className='font-semibold mb-3 text-primary-clr-primary-6 capitalize text-sm tracking-wide'>
              color
            </h5>
            <div className='flex items-center'>
              {colors.map( (c : any,index)=>{
                if(c === 'all'){
                  return <button type='button'
                                 name='color'
                                 data-color='all'
                                 onClick={updateFilters}
                                 className={`${color === 'all' ? "underline opacity-100" : 'opacity-50 '} flex justify-center text-center mr-2 capitalize bg-transparent text-primary-clr-grey-5 cursor-pointer tracking-wide`}
                         >
                          all
                         </button>
                }
                return <button type='button'
                               key={index}
                               name='color'
                               style={{ background : c}}
                               className={`${color === c ? "opacity-100" : 'opacity-50 '} inline-block w-6 h-1.5r rounded-full mr-2 border-0 cursor-pointer items-center justify-center flex bg-primary-clr-black`}
                               onClick={updateFilters}
                               data-color={c}
                        >
                          {color === c ?  <FaCheck className='text-white text-xs' /> : null}
                       </button>
              })}
            </div>
          </div>
          {/* end of colors */}
          {/* price */}
          <div className='mb-5'>
              <h5 className='font-semibold mb-3 text-primary-clr-primary-6 capitalize text-sm tracking-wide'>
                price
              </h5>
              <p className='mb-1'>
                {formatPrice(price)}
              </p>
              <input type="range"
                     name='price'
                     onChange={updateFilters}
                     min={min_price}
                     max={max_price}
                     value={price}
               />
          </div>
          {/* end of price */}
          {/* shipping */}
          <div className='mb-5 grid grid-cols-2 capitalize gap-2 text-base items-center'>
            <label htmlFor="shipping">free shipping</label>
            <input type="checkbox"
                   name='shipping'
                   id='shipping'
                   onChange={updateFilters}
                   checked={shipping}
            />
          </div>
          {/* end of shipping */}
        </form>
        <button type='button'
                onClick={clearFilters}
                className='rounded py-1 px-2 text-white bg-primary-clr-red-dark'
        >
          clear filters
        </button>
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   .form-control {
//     margin-bottom: 1.25rem;
//     h5 {
//       margin-bottom: 0.5rem;
//     }
//   }
//   .search-input {
//     padding: 0.5rem;
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     border-color: transparent;
//     letter-spacing: var(--spacing);
//   }
//   .search-input::placeholder {
//     text-transform: capitalize;
//   }

//   button {
//     display: block;
//     margin: 0.25em 0;
//     padding: 0.25rem 0;
//     text-transform: capitalize;
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid transparent;
//     letter-spacing: var(--spacing);
//     color: var(--clr-grey-5);
//     cursor: pointer;
//   }
//   .active {
//     border-color: var(--clr-grey-5);
//   }
//   .company {
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     border-color: transparent;
//     padding: 0.25rem;
//   }
//   .colors {
//     display: flex;
//     align-items: center;
//   }
//   .color-btn {
//     display: inline-block;
//     width: 1rem;
//     height: 1rem;
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
//       font-size: 0.5rem;
//       color: var(--clr-white);
//     }
//   }
//   .all-btn {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 0.5rem;
//     opacity: 0.5;
//   }
//   .active {
//     opacity: 1;
//   }
//   .all-btn .active {
//     text-decoration: underline;
//   }
//   .price {
//     margin-bottom: 0.25rem;
//   }
//   .shipping {
//     display: grid;
//     grid-template-columns: auto 1fr;
//     align-items: center;
//     text-transform: capitalize;
//     column-gap: 0.5rem;
//     font-size: 1rem;
//   }
//   .clear-btn {
//     background: var(--clr-red-dark);
//     color: var(--clr-white);
//     padding: 0.25rem 0.5rem;
//     border-radius: var(--radius);
//   }
//   @media (min-width: 768px) {
//     .content {
//       position: sticky;
//       top: 1rem;
//     }
//   }
// `

export default Filters
