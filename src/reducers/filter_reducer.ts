import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../utils/actions'

const filter_reducer = (state :any, action :any) => {

  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map( (p:any)=> p.price);
      maxPrice = Math.max(...maxPrice);
      return {  ...state ,
                all_products : action.payload ,
                filtered_products : action.payload,
                filters : {...state.filters,
                              max_price : maxPrice ,
                              price: maxPrice}
             }
    case SET_GRIDVIEW:
      return {...state , grid_view : true}
    case SET_LISTVIEW:
      return {...state , grid_view : false}
    case UPDATE_SORT:
      return {...state, sort : action.payload}
    case SORT_PRODUCTS:
    {
      const {sort,filtered_products} = state;
      let tempProducts  = [...filtered_products]
      switch (sort) {
        case 'price-lowest':
          tempProducts = tempProducts.sort((a,b)=> (a.price - b.price))
          break;
        case 'price-highest':
          tempProducts = tempProducts.sort((a,b)=> (b.price - a.price))
          break;
        case 'name-a':
          tempProducts = tempProducts.sort((a,b)=> {
            return a.name.localeCompare(b.name)
          })
          break;
        case 'name-z':
          tempProducts = tempProducts.sort((a,b)=> {
            return b.name.localeCompare(a.name)
          })
          break;
        default:
          tempProducts = tempProducts.sort((a,b)=> (a.price - b.price))
          break;
      }
      return {...state , filtered_products : tempProducts }
    }

    case UPDATE_FILTERS:
      const {name,value} = action.payload;
      return {...state,
                 filters : {...state.filters,
                              [name] : value}
             }
    case FILTER_PRODUCTS:
      const {all_products} = state;
      const {text,category,company,color,price,shipping} = state.filters
      let tempProducts = [...all_products];
      //filtering
      // text
      if(text){
        tempProducts = tempProducts.filter( (product)=>{
          return product.name.toLowerCase().startsWith(text);
        })
      }
      // category
      if(category !=='all'){
        tempProducts = tempProducts.filter( (product)=> product.category === category)
      }
      // company
      if(company !=='all'){
        tempProducts = tempProducts.filter( (product)=> product.company === company)
      }
      // color
      if(color !=='all'){
        tempProducts = tempProducts.filter( (product)=> {
          return product.colors.find( (c : any ) => c === color)
        })
      }
      // price
        tempProducts = tempProducts.filter( (product)=> product.price <= price)
      // shipping
      if(shipping){
        tempProducts = tempProducts.filter( (product)=> product.shipping === true)
      }
      return {...state,filtered_products : tempProducts}
    case CLEAR_FILTERS:
      return {...state, filters :{
                          text : '',
                          company : 'all',
                          category : 'all',
                          color : 'all',
                          min_price : 0,
                          max_price : state.filters.max_price,
                          price : state.filters.max_price,
                          shipping : false,
                        }
            }

    default:
      return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }

}

export default filter_reducer
