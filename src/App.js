import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Login from './Auth/Login';
import Register from './Auth/Register';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from './Auth/Forgot';
import Confirm from './Auth/Confirm';
import Home from './Home/Home';
import Products from './Products/Products';
import Cart from './Cart/Cart';


function App() {
  
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpassword" element={<Forgot/>}/>
      <Route path='/Reset-Password/:id/:token' element={<Confirm/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
        
        
        <Route path="/home" element={<Home/>}>
         
         </Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
