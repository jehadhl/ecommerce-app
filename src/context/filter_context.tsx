import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions'
import { useProductsContext } from './products_context'

const initialContext = {
  grid_view : true,
  filtered_products:[] as any,
  all_products:[] as any,
  setGridView : (() => {}) as any,
  setListView : (() => {}) as any,
  sort: 'price-lowest',
  updateSort : (() => {}) as any,
  filters : {
    text : '',
    company : 'all',
    category : 'all',
    color : 'all',
    min_price : 0,
    max_price : 0,
    price : 0,
    shipping : false,
  },
  updateFilters : (() => {}) as any,
  clearFilters : (() => {}) as any,
}

const initialState = {}

const FilterContext = React.createContext(initialContext)

export const FilterProvider = ({ children }: any) => {
  const {products} = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialContext);

  useEffect(()=>{
    dispatch({type:LOAD_PRODUCTS , payload : products})
  },[products])

  useEffect(()=>{
    dispatch({type:FILTER_PRODUCTS})
    dispatch({type:SORT_PRODUCTS})
  },[products,state.sort,state.filters])

  const setGridView = () => dispatch({type:SET_GRIDVIEW});

  const setListView = () => dispatch({type:SET_LISTVIEW});

  const updateSort = (e : any) => {
    const name  = e.target.name;
    const value = e.target.value;
    dispatch({type:UPDATE_SORT , payload : value});
  }

  const updateFilters = (e : any) => {
    const name  = e.target.name;
    let value = e.target.value;
    if(name === 'category')
      value = e.target.textContent;
    if(name === 'color')
      value = e.target.dataset.color;
    if(name === 'price')
      value = Number(value);
    if(name === 'shipping')
      value = e.target.checked;
    dispatch({type:UPDATE_FILTERS , payload : {name,value}});
  }

  const clearFilters = ()=> {
    dispatch({type:CLEAR_FILTERS});
  }

  return (
    <FilterContext.Provider value={{...state,setGridView,setListView,updateSort,updateFilters,clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
