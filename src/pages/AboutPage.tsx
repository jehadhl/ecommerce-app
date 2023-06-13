import React from 'react'

import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <section className="page section section-center grid gap-16 md:grid-cols-2">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className='title'>
            <h1 className="tracking-wide capitalize mb-7 leading-5 text-5xl font-bold">Our Story</h1>
            <div className="underline w-24 h-1 mx-auto bg-primary-clr-primary-5"></div>
          </div>
          <p className="my-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente cupiditate iusto quaerat fugiat dolore, a sint itaque. Eius perspiciatis, voluptas possimus, officiis autem hic officia ut nesciunt nobis, quae temporibus accusamus? Aperiam, sequi? Sequi culpa expedita exercitationem ipsam esse officia, blanditiis, eaque commodi consequatur inventore sit? Totam nam eum quod, error nihil, itaque officiis repellat atque quaerat quae a corporis aut aliquam rerum recusandae eaque officia voluptates perferendis voluptatum.
          </p>
        </article>
      </section>
    </main>
  )
}


// const Wrapper = styled.section`
//   display: grid;
//   gap: 4rem;
//   img {
//     width: 100%;
//     display: block;
//     border-radius: var(--radius);
//     height: 500px;
//     object-fit: cover;
//   }
//   p {
//     line-height: 2;
//     max-width: 45em;
//     margin: 0 auto;
//     margin-top: 2rem;
//     color: var(--clr-grey-5);
//   }
//   .title {
//     text-align: left;
//   }
//   .underline {
//     margin-left: 0;
//   }
//   @media (min-width: 992px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `
export default AboutPage
