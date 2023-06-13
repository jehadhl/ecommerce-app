import React from 'react';
import { Route , Navigate } from 'react-router-dom'; //Redirect
import { withAuthenticationRequired } from '@auth0/auth0-react';
// will remove later
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({children ,...rest} : any ) => {

  const {myUser} : any = useUserContext();

  return <Route {...rest} render={()=>{
      return myUser ? children : <Navigate to='/'></Navigate>
    }}></Route>
  ;
};
export default PrivateRoute;

