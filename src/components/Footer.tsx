import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col h-5r items-center justify-center bg-black text-center text-white">
        <h5>
          <span>© 2022</span>
          <span className="text-primary-clr-primary-5">comfySloth</span>
        </h5>
        <h5>All rights reserved</h5>
      </footer>
    </>

  )
}

// const Wrapper = styled.footer`
//   height: 5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: var(--clr-black);
//   text-align: center;
//   span {
//     color: var(--clr-primary-5);
//   }
//   h5 {
//     color: var(--clr-white);
//     margin: 0.1rem;

//     font-weight: 400;
//     text-transform: none;
//     line-height: 1.25;
//   }
//   @media (min-width: 776px) {
//     flex-direction: row;
//   }
// `

export default Footer
