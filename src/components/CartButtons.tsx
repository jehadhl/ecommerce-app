import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const {closeSidebar} =useProductsContext();
  const {total_items} = useCartContext();
  const {loginWithRedirect,myUser,logout} : any = useUserContext();


  return <div className="grid grid-cols-2 items-center w-56 mx-auto">
    <Link onClick={closeSidebar}
          to="/cart" className="text-primary-clr-grey-1 text-2xl tracking-wide flex">
     Cart
     <span className="flex items-center relative">
      <FaShoppingCart className='ml-1 h-6' />
      <span className="absolute -top-3 -right-4 bg-primary-clr-primary-5 flex w-4 h-4 items-center justify-center text-white py-1 px-3 text-xs rounded-2xl">
        {total_items}
      </span>
     </span>
    </Link>

    {myUser ?
      <button type="button"
              className="flex items-center bg-transparent border-transparent cursor-pointer text-2xl text-primary-clr-grey-1 tracking-wide"
              onClick={()=> logout({
                returnTo:window.location.origin
              })}
      >
        Logout
        <FaUserMinus className="ml-1" />
      </button>
    :
      <button type="button"
              className="flex items-center bg-transparent border-transparent cursor-pointer text-2xl text-primary-clr-grey-1 tracking-wide"
              onClick={loginWithRedirect}
        >
          Login
          <FaUserPlus className="ml-1" />
        </button>

    }

  </div>
}

export default CartButtons
