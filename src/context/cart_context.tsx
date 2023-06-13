import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../utils/actions'


const getLocalStorage = () =>{
  let cart : any = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

const initialContext = {
  cart:getLocalStorage(),
  total_items : 0,
  total_amount : 0,
  shipping_fee: 534
}

const initialState = {}

const CartContext = React.createContext(initialContext)

export const CartProvider = ({ children  }: any) => {

  const [state, dispatch] = useReducer(reducer, initialContext);

  //add to cart
  const addToCart = (id :any,color : any,amount : any,product : any)=> {
    dispatch({type:ADD_TO_CART,payload:{id,color,amount,product}})
  }

  //remove item
  const removeItem = (id : any) => {
    dispatch({type:REMOVE_CART_ITEM,payload:id})
  }

  //toggele amount
  const toggeleAmount = (ID : any , value : any) => {
    dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{ID , value}})
  }

  // clear cart
  const clearCart = () => {
    dispatch({type:CLEAR_CART})
  }

  useEffect( ()=>{
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('cart',JSON.stringify(state.cart));
  } , [state.cart])


  return (
    <CartContext.Provider value={{...state,addToCart,removeItem,toggeleAmount,clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
