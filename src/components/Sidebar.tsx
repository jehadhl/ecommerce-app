import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'

import CartButtons from './CartButtons'
import { useUserContext } from '../context/user_context'

function classNames(...classes : any) {
  return classes.filter(Boolean).join(' ')
}
const Sidebar = () => {
  const {isSidebarOpen , closeSidebar} =useProductsContext();
  const {myUser} : any = useUserContext();

  return <div className="text-center">
    <aside className={classNames(
      isSidebarOpen ? "z-50 translate-x-0" : "-z-10 -translate-x-full",
      "fixed top-0 left-0 w-full h-100% bg-white transition duration-300 ease-linear md:hidden"
    )}>
      <div className="flex justify-between items-center px-6 py-4">
        <img src={logo} alt="comfy Sloth" className="h-11 justify-self-center" />
        <button type='button'
                onClick={closeSidebar}
                className="text-3xl bg-transparent border-transparent cursor-pointer mt-1 text-primary-clr-red-dark transition duration-300 ease-linear hover:text-primary-clr-red-light">
          <FaTimes />
        </button>
      </div>
      <ul className="mb-8">
        {links.map((link)=>{
            const{id,text,url} = link;
            return <li key={id}  >
              <Link onClick={closeSidebar}
                    className="block text-left text-primary-clr-grey-3 capitalize text-base tracking-widest py-4 px-6 hover:border-b-2 transition duration-300 ease-linear hover:text-primary-clr-grey-2 hover:bg-primary-clr-grey-10 hover:pl-8" to={url}>{text}</Link>
            </li>
          })}
          { myUser && <li >
            <Link onClick={closeSidebar}
                  className="block text-left text-primary-clr-grey-3 capitalize text-base tracking-widest py-4 px-6 hover:border-b-2 transition duration-300 ease-linear hover:text-primary-clr-grey-2 hover:bg-primary-clr-grey-10 hover:pl-8" to="/checkout">checkout</Link>
          </li>}

      </ul>
      <CartButtons />
    </aside>

  </div>
}

export default Sidebar
