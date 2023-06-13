import React from 'react'

import { Link } from 'react-router-dom'
const PageHero = ({title , product}:any) => {
  return (
    <section className="bg-primary-clr-primary-10 w-full min-h-20v flex items-center text-primary-clr-primary-1">
        <div className="section-center">
          <h3 className="tracking-wide capitalize mb-8 leading-5 text-2xl font-bold">
            <Link className="text-primary-clr-primary-3 p-2 transition duration-300 ease-linear hover:text-primary-clr-primary-1" to="/">
              Home
            </Link>
            {product &&
              <Link className='text-primary-clr-primary-3 p-2 transition duration-300 ease-linear hover:text-primary-clr-primary-1' to="/products">
                / Products
              </Link>} /
            {title}
          </h3>
        </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   background: var(--clr-primary-10);
//   width: 100%;
//   min-height: 20vh;
//   display: flex;
//   align-items: center;

//   color: var(--clr-primary-1);
//   a {
//     color: var(--clr-primary-3);
//     padding: 0.5rem;
//     transition: var(--transition);
//   }
//   a:hover {
//     color: var(--clr-primary-1);
//   }
// `

export default PageHero
