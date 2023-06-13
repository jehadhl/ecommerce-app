import React from 'react'

import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <main className="page-100 flex justify-center items-center text-center bg-primary-clr-primary-10">
        <section>
          <h1 className="text-9xl font-semibold">404</h1>
          <h3 className="tracking-wide capitalize mb-8 leading-5 text-2xl">Sorry, the page you tried cannot be found</h3>
          <Link to="/" className="btn">
            back home
          </Link>
        </section>
    </main>
  )
}

// const Wrapper = styled.main`
//   background: var(--clr-primary-10);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   h1 {
//     font-size: 10rem;
//   }
//   h3 {
//     text-transform: none;
//     margin-bottom: 2rem;
//   }
// `

export default ErrorPage
