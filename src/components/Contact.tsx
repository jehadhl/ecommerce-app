import React from 'react'


const Contact = () => {
  return (
    <section className='py-20 px-0 xl:py-60'>
      <div className='section-center'>
        <h3 className='tracking-wide normal-case text-3xl font-bold mb-8'>
          Join our newsletter and get 20% off
        </h3>
        <div className='content md:grid md:grid-cols-2 md:gap-32 md:items-center md:mt-8'>
          <p className='leading-8 max-w-2xl text-primary-clr-grey-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis repellat nihil fugit asperiores cumque similique quas voluptate vitae odio a.
          </p>
          <form className='grid grid-cols-2 w-screen max-w-lg'>
            <input type="email"
                   placeholder='enter email'
                   className='w-full text-base py-2 px-4 border-2 border-black border-r-0 text-primary-clr-grey-3 rounded-tl rounded-bl' />
            <button type='submit'
                    className='w-1/2 text-base py-2 px-4 border-2 border-black bg-primary-clr-primary-5 text-black cursor-pointer capitalize tracking-wide transition duration-300 ease-linear rounded-tr rounded-br hover:text-white'>subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
// const Wrapper = styled.section`
//   padding: 5rem 0;
//   h3 {
//     text-transform: none;
//   }
//   p {
//     line-height: 2;
//     max-width: 45em;
//     color: var(--clr-grey-5);
//   }
//   .contact-form {
//     width: 90vw;
//     max-width: 500px;
//     display: grid;
//     grid-template-columns: 1fr auto;
//   }

//   .form-input,
//   .submit-btn {
//     font-size: 1rem;
//     padding: 0.5rem 1rem;
//     border: 2px solid var(--clr-black);
//   }
//   .form-input {
//     border-right: none;
//     color: var(--clr-grey-3);
//     border-top-left-radius: var(--radius);
//     border-bottom-left-radius: var(--radius);
//   }
//   .submit-btn {
//     border-top-right-radius: var(--radius);
//     border-bottom-right-radius: var(--radius);
//   }
//   .form-input::placeholder {
//     color: var(--clr-black);
//     text-transform: capitalize;
//   }
//   .submit-btn {
//     background: var(--clr-primary-5);
//     text-transform: capitalize;
//     letter-spacing: var(--spacing);
//     cursor: pointer;
//     transition: var(--transition);
//     color: var(--clr-black);
//   }
//   .submit-btn:hover {
//     color: var(--clr-white);
//   }
//   @media (min-width: 992px) {
//     .content {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       align-items: center;
//       gap: 8rem;
//       margin-top: 2rem;
//     }
//     p {
//       margin-bottom: 0;
//     }
//   }
//   @media (min-width: 1280px) {
//     padding: 15rem 0;
//   }
// `

export default Contact
