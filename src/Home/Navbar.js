import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Home/lo.jpg"
function Navbar({cart,value,total,removeFromCart}) {
  // console.log(removeFromCart)
  // console.log(setValues)
  // console.log(value)
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
  return (
    <>
    <div class="container">
    <a class="navbar-brand fw-bold" href="#">
      <img src={Logo} alt="" width="60" height="50" class="d-inline-block align-text-top"/>
       Shopp.<span style={{color:"rgb(240, 82, 52)"}}>my</span>
    </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item mx-3">
              <Link to={"/home"}class="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li class="nav-item mx-3">
              <Link to={"/products"} class="nav-link fw-bold" >products</Link>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">history</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">login</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="#">register</a>
            </li>
          </ul>
          <form class="d-flex">
            <Link to="/cart" state={{value,total,removeFromCart}} class="btn btn-outline-dark"  type="submit">
            <i class="fa-solid fa-cart-shopping me-2"></i>
              Cart
            <span class="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
           
            </Link>
          </form>


        </div>
      </div>
    </>
  )
}

export default Navbar