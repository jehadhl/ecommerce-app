import React from 'react'

import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <section className="section-center min-h-60v grid place-items-center md:grid-cols-2 gap-2">
      <article className='content'>
        <h1 className="tracking-wide capitalize mb-7 md:mb-8 text-5xl font-bold p-2">
          design your <br/>
          comfort zone
        </h1>
        <p className="mb-8 leading-8 max-w-3xl text-xl text-primary-clr-grey-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium exercitationem sapiente, enim voluptatibus suscipit voluptatem, necessitatibus dolorem illum labore deleniti fuga fugit ad sequi cumque eligendi autem commodi optio quia!
        </p>
        <Link to="/products" className="btn hero-btn md:px-6 md:py-3 md:text-xl">
          shop now
        </Link>
      </article>
      <article className="md:relative md:block hidden before:absolute">
        <img src={heroBcg} alt="nice table" className="md:w-full md:h-550px md:relative rounded md:block md:object-cover" />
        <img src={heroBcg2} alt="person working" className="md:absolute md:w-64 md:bottom-0 md:left-0 md:rounded md:-translate-x-1/2" />
      </article>
    </section>
  )
}

// const Wrapper = styled.section`
//   min-height: 60vh;
//   display: grid;
//   place-items: center;
//   .img-container {
//     display: none;
//   }

//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin-bottom: 2rem;
//     color: var(--clr-grey-5);
//     font-size: 1rem;
//   }
//   @media (min-width: 992px) {
//     height: calc(100vh - 5rem);
//     grid-template-columns: 1fr 1fr;
//     gap: 8rem;
//     h1 {
//       margin-bottom: 2rem;
//     }
//     p {
//       font-size: 1.25rem;
//     }
//     .hero-btn {
//       padding: 0.75rem 1.5rem;
//       font-size: 1rem;
//     }
//     .img-container {
//       display: block;
//       position: relative;
//     }
//     .main-img {
//       width: 100%;
//       height: 550px;
//       position: relative;
//       border-radius: var(--radius);
//       display: block;
//       object-fit: cover;
//     }
//     .accent-img {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       width: 250px;
//       transform: translateX(-50%);
//       border-radius: var(--radius);
//     }
//     .img-container::before {
//       content: '';
//       position: absolute;
//       width: 10%;
//       height: 80%;
//       background: var(--clr-primary-9);
//       bottom: 0%;
//       left: -8%;
//       border-radius: var(--radius);
//     }
//   }
// `

export default Hero
