import React from 'react'

import { services } from '../utils/constants'

const Services = () => {
  return (
    //
    <section className='py-20 bg-primary-clr-primary-10 xl:p-0'>
      <div className='section-center xl:translate-y-20'>
        <article className='md:grid md:grid-cols-3'>
          <h3 className='tracking-wide capitalize text-2xl font-semibold text-primary-clr-primary-1 mb-8'>
            custom furniture<br/>
            built only for you
          </h3>
          <p className='mb-0 text-primary-clr-primary-3 leading-7'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt voluptates, optio aperiam modi debitis nihil esse tempore vel ex?
          </p>
        </article>
        <div className='mt-16 grid gap-10 sm:grid-cols-3'>
          {services.map( (service)=>{
              const{id,icon,title,text} = service;
              return (
                <article key={id} className="rounded text-center bg-primary-clr-primary-7 py-10 px-8">
                  <span className='icon grid w-16 h-4r my-0 mx-auto place-items-center mb-4 bg-primary-clr-primary-10 text-primary-clr-primary-1 rounded-full text-4xl'>{icon}</span>
                  <h4 className='text-primary-clr-primary-1 text-xl capitalize tracking-wide leading-5 mb-3 font-semibold'>{title}</h4>
                  <p className='mb-0 text-primary-clr-primary-3 leading-7'>{text}</p>
                </article>
              );
          })}
        </div>
      </div>
    </section>
  )
}

// const Wrapper = styled.section`
//   h3,
//   h4 {
//     color: var(--clr-primary-1);
//   }
//   padding: 5rem 0;

//   background: var(--clr-primary-10);

//   .header h3 {
//     margin-bottom: 2rem;
//   }
//   p {
//     margin-bottom: 0;
//     line-height: 1.8;
//     color: var(--clr-primary-3);
//   }
//   .services-center {
//     margin-top: 4rem;
//     display: grid;
//     gap: 2.5rem;
//   }
//   .service {
//     background: var(--clr-primary-7);
//     text-align: center;
//     padding: 2.5rem 2rem;
//     border-radius: var(--radius);
//     p {
//       color: var(--clr-primary-2);
//     }
//   }
//   span {
//     width: 4rem;
//     height: 4rem;
//     display: grid;
//     margin: 0 auto;
//     place-items: center;
//     margin-bottom: 1rem;
//     border-radius: 50%;
//     background: var(--clr-primary-10);
//     color: var(--clr-primary-1);
//     svg {
//       font-size: 2rem;
//     }
//   }
//   @media (min-width: 992px) {
//     .header {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//     }
//   }
//   @media (min-width: 576px) {
//     .services-center {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
//   @media (min-width: 1280px) {
//     padding: 0;
//     .section-center {
//       transform: translateY(5rem);
//     }
//   }
// `
export default Services
