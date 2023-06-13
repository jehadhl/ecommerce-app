import React from 'react'

import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const {openSidebar} =useProductsContext();
  const {myUser} : any = useUserContext();

  return (
    <nav className="flex h-5r items-center justify-center">
      <div id="nav-center" className='mx-auto my-0 w-screen max-w-7xl md:grid md:grid-cols-3 md:items-center'>
        <div id="nav-header" className="flex items-center justify-between">
           <Link to="/" >
            <img className='-ml-4 w-44' src={logo} alt="comfy sloth" />
           </Link>
           <button type="button"
                   id="nav-toggle"
                   onClick={openSidebar}
                   className='bg-transparent border-transparent text-primary-clr-primary-5 cursor-pointer md:hidden'>
                  <FaBars className="text-3xl" />
           </button>
        </div>
        <ul id="nav-links" className='hidden md:flex md:justify-center'>
          {links.map((link)=>{
            const{id,text,url} = link;
            return <li key={id} className="md:my-0 mx-2">
              <Link className="text-primary-clr-grey-3 capitalize text-base tracking-widest p-2 hover:border-b-2 hover:border-primary-clr-primary-7" to={url}>{text}</Link>
            </li>
          })}
          {myUser && <li className='className="md:my-0 mx-2"'>
            <Link to='/checkout' className="text-primary-clr-grey-3 capitalize text-base tracking-widest p-2 hover:border-b-2 hover:border-primary-clr-primary-7">checkout</Link>
            </li>}
        </ul>
        <div className="hidden md:grid">
          <CartButtons />
        </div>
      </div>
    </nav>
  )
}

// const NavContainer = styled.nav`
//   height: 5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   .nav-center {
//     width: 90vw;
//     margin: 0 auto;
//     max-width: var(--max-width);
//   }
//   .nav-header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     img {
//       width: 175px;
//       margin-left: -15px;
//     }
//   }
//   .nav-toggle {
//     background: transparent;
//     border: transparent;
//     color: var(--clr-primary-5);
//     cursor: pointer;
//     svg {
//       font-size: 2rem;
//     }
//   }
//   .nav-links {
//     display: none;
//   }
//   .cart-btn-wrapper {
//     display: none;
//   }
//   @media (min-width: 992px) {
//     .nav-toggle {
//       display: none;
//     }
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr auto;
//       align-items: center;
//     }
//     .nav-links {
//       display: flex;
//       justify-content: center;
//       li {
//         margin: 0 0.5rem;
//       }
//       a {
//         color: var(--clr-grey-3);
//         font-size: 1rem;
//         text-transform: capitalize;
//         letter-spacing: var(--spacing);
//         padding: 0.5rem;
//         &:hover {
//           border-bottom: 2px solid var(--clr-primary-7);
//         }
//       }
//     }
//     .cart-btn-wrapper {
//       display: grid;
//     }
//   }
// `

export default Nav
