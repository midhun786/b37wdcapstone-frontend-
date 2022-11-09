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
import { useEffect, useState } from 'react';
import axios from 'axios';
import Viewproduct from './Home/Viewproduct';
import History from './History/History';
import { env } from './config';
import Swal from 'sweetalert2';


function App() {
  // const [data,setData]=useState([
  //   {
  //     id:1,
  //     title:"Harry Potter",
  //     price:1499,
  //     imgUrl:"https://m.media-amazon.com/images/I/8179uEK+gcL.jpg"
  //  },
  //  {
  //   id:2,
  //   title:"Skin polishing face pack",
  //   price:650,
  //   imgUrl:"https://www.lindobeautycare.in/product-images/skin+polishing+face+pack.JPG/369677000006342927/600x600"
  //  },
  //  {
  //   id:3,
  //   title:"Apple iphone 13 ProMax",
  //   price:129900,
  //   imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646060286/MERN-Ecommerce/uc8hlxzuwceob6oqn4cw.jpg"
  //  },
  //  {
  //   id:4,
  //   title:"Iphone 12",
  //   price:64990,
  //   imgUrl:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX522_.jpg"
  //  },
  //  {
  //   id:5,
  //   title:"Lord of Rings",
  //   price:1599,
  //   imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646060478/MERN-Ecommerce/ki5dq1hcnmxz6x8qhv6q.jpg"
  //  },
  //  {
  //   id:6,
  //   title:"Mens Casual Shirt",
  //   price:899,
  //   imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646059588/MERN-Ecommerce/zcc6qmkitt1yxjsti5wz.jpg"
  //  },
  //  {
  //   id:7,
  //   title:"Mens Shirt",
  //   price:799,
  //   imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646059244/MERN-Ecommerce/fvvwgwofzs42adfsp2f2.jpg"
  //  },
  //  {
  //   id:8,
  //   title:"Quran book",
  //   price:450,
  //   imgUrl:"https://i0.wp.com/www.darussalam.in/wp-content/uploads/2022/06/Al-Quran-Al-Kareem-The-Noble-Quran.jpg?fit=890%2C1280&ssl=1"
  //  },
  // ])
  const [data,setData]=useState([{}])
  const [isloading,setLoading]=useState(false)

  useEffect(()=>{
    LoadData();
  },[]);

  let LoadData=async()=>{
  try {
      setLoading(true);
      let req= await axios.get(`${env.api}/home`,{
        headers:{
          authorisation:window.localStorage.getItem("app-token")
        }
      })
      setData(req.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
      
  }
  const [cart,setCart] =useState(0);
  const[value,setValues]=useState([]);
  const[total,setTotal]=useState(0);
  // const [initialValues,setInitialValues]=useState(1)

  const handleIncrement=(idx)=>{
    console.log(idx)
    const incre=value.map((obj,index)=>{
      if(index==idx){
        const inc= {...obj,count:obj.count+1}
        return {...inc}
      }else{
        return {...obj}
      }
     })
     setValues(incre)
    }
  const handleDecrement=(idx)=>{
    console.log(idx)
    const dec=value.map((obj,index)=>{
      if(index==idx){
        const dec= {...obj,count:obj.count-1}
        return {...dec}
      }else{
        return {...obj}
      }
     })
     setValues(dec)
  }
  
  const addToCart=(item)=>{
    setCart(cart+1)
   Swal.fire({ title: 'Thank you', text: 'Added in cart', icon: 'success', confirmButtonText: "check cart"});
    setValues([...value,item])
    setTotal(total+item.price)
  }
  const removeFromCart=(ele)=>{
    if(cart>0){
    alert("Are you sure want to remove item")
    setCart(cart-1)
    let index=value.findIndex((obj)=> obj._id==ele._id);
    console.log(ele.price)
    value.splice(index,1);
    setValues([...value]);
    setTotal(total-ele.price);
  }
}
  
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Reset" element={<Forgot/>}/>
      <Route path='/Reset-Password/:id/:token' element={<Confirm/>}/>
      <Route path="/products" element={<Products cart={cart} isloading={isloading} value={value} data={data} handleToCart={addToCart} />}/>
      <Route path="/cart" element={<Cart 
      value={value} 
      cart={cart}
      total={total} 
      // initialValues={initialValues}
      handleToRemove={removeFromCart} 
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}/>}/>
      
      <Route path="/viewproduct/:id" element={<Viewproduct cart={cart} handleToCart={addToCart} isloading={isloading}/>}/>
       <Route path="/history" element={<History cart={cart}/>}/> 
        
        <Route path="/home" element={<Home 
        cart={cart} 
        value={value}
        total={total}
        handleToCart={addToCart}
        data={data} 
        isloading={isloading}/>}>
           
        </Route>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
