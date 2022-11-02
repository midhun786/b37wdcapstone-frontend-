import React from 'react'
import { useState } from 'react'
import Advertise from '../ads/ads'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import Card from './Card'
import Navbar from './Navbar'


function Home() {
  const [data,setData]=useState([
    {
      id:1,
      title:"Harry Potter",
      price:1499,
      imgUrl:"https://m.media-amazon.com/images/I/8179uEK+gcL.jpg"
   },
   {
    id:2,
    title:"Skin polishing face pack",
    price:650,
    imgUrl:"https://www.lindobeautycare.in/product-images/skin+polishing+face+pack.JPG/369677000006342927/600x600"
   },
   {
    id:3,
    title:"Apple iphone 13 ProMax",
    price:129900,
    imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646060286/MERN-Ecommerce/uc8hlxzuwceob6oqn4cw.jpg"
   },
   {
    id:4,
    title:"Iphone 12",
    price:64990,
    imgUrl:"https://m.media-amazon.com/images/I/71E5zB1qbIL._SX522_.jpg"
   },
   {
    id:5,
    title:"Lord of Rings",
    price:1599,
    imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646060478/MERN-Ecommerce/ki5dq1hcnmxz6x8qhv6q.jpg"
   },
   {
    id:6,
    title:"Mens Casual Shirt",
    price:899,
    imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646059588/MERN-Ecommerce/zcc6qmkitt1yxjsti5wz.jpg"
   },
   {
    id:7,
    title:"Mens Shirt",
    price:799,
    imgUrl:"https://res.cloudinary.com/dxukp4xux/image/upload/v1646059244/MERN-Ecommerce/fvvwgwofzs42adfsp2f2.jpg"
   },
   {
    id:8,
    title:"Quran book",
    price:450,
    imgUrl:"https://i0.wp.com/www.darussalam.in/wp-content/uploads/2022/06/Al-Quran-Al-Kareem-The-Noble-Quran.jpg?fit=890%2C1280&ssl=1"
   },
  ])
  const [cart, setCart] =useState(0);
  const[value, setValues]=useState([]);
  const[total,setTotal]=useState(0);
  
  let addToCart=(item)=>{
    setCart(cart+1)
    alert(item.price)
    setValues([...value,item])
    setTotal(total+item.price)
  }

  let removeFromCart=(item)=>{
    if(cart>0){
      alert(`Are you sure want to remove item`)
    setCart(cart-1)
    let index=value.findIndex((obj)=> obj.id==item.id);
    value.splice(index,1);
    setValues([...cart]);
    setTotal(total-item.price);
  }
    
  }
 return (
    //navbar
    //Banner
    //cards
    //advertisement
    //footer
    <>
    {/* <--------------------start-Navbar------------------------> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar cart={cart} value={value} total={total}></Navbar>
      </nav>
      
      {/* <------------------------start-banner------------------> */}
      <div className="main mt-5">
        <div className="container">
          <div>
            <Banner />
          </div>
        </div>
      </div>
       {/* <------------------------cards start------------------> */}
      <div class="container ">
        <section class="row py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                    data.map((item)=>{
                      return <Card item={item} removeFromCart={removeFromCart} handleToCart={addToCart}></Card>
                    })
                   }
                </div>
                </div>
              </section>
        </div>
     {/* <------------------------advertisement start------------------> */}
     <span>
     <Advertise></Advertise>
     </span><br/>
     
      {/* <------------------------Footer start------------------> */}
      <div class="card">
      <Footer></Footer>
      </div>
    </>
  )
}

export default Home