import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './Login';
import Register from './Register';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from './Forgot';
import Confirm from './Confirm';

function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgotpassword" element={<Forgot/>}/>
      <Route path='/Reset-Password/:id/:token' element={<Confirm/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
