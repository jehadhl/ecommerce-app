import './App.css';

import React from 'react';
import { useUserContext } from './context/user_context';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'
import { Navbar , Sidebar , Footer } from "./components";

import {
    Home,
    Products,
    SingleProduct,
    About,
    Cart,
    Error,
    Checkout
} from "./pages";





function App() {
  const {myUser} : any = useUserContext();

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/'  element={<Home />}> </Route>
        <Route path='/about'  element={<About />}> </Route>
        <Route path='/cart'  element={<Cart />}> </Route>
        <Route path='/products'  element={<Products />}> </Route>
        <Route path='/products/:id'  element={<SingleProduct />}> </Route>
        <Route path='/checkout'  element={myUser ? <Checkout /> : <Navigate to='/'></Navigate>}> </Route>
        <Route path='/*'  element={<Error />}> </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
