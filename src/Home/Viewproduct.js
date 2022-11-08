import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { env } from '../config';
import Navbar from './Navbar'
import Lottie from 'react-lottie';
import animationData from "./lottie/92411-shopping-cart.json"

function Viewproduct({cart,handleToCart,isloading}) {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
   const params=useParams();
  //  console.log(params.id);
   let location=useLocation();
   let product=location.state.item
//  console.log(product)
//  console.log(params)

   const[userData, setUserData]=useState({});
   useEffect(()=>{
     Loaduser();
   },[])

  let Loaduser=async()=>{
     try {
        let user= await axios.get(`${env.api}/viewproduct/${params.id}`,{
          headers:{
            "authorisation":window.localStorage.getItem("app-token")
          }
        })
        setUserData(user.data)
     } catch (error) {
        console.log(error)
     }
}
let handleToBuy=(product)=>{
  handleToCart(product)
}
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar cart={cart} ></Navbar>
    </nav>
    <div className="container mt-5">
       <div className="row col-lg-12 col-md-8 col-sm-8">
       <div className="card mb-3 offset-4" style={{maxWidth: "540px"}}>
        {
          isloading?<><Lottie options={defaultOptions}
          height={400}
          width={400}
          /></>:<div className="row g-0">
          <div className="col-md-4">
            <img src={userData.imgUrl} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{`Title: ${userData.title}`}</h5>
              <p className="card-text">{`Price:${userData.price}`}</p>
              <p className="card-text"><small className="text-muted"><h6>Description:</h6>lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam</small></p>
              <button className="btn btn-outline-dark mt-auto" style={{backgroundColor:"rgb(255, 119, 77)"}} onClick={()=>handleToBuy(product)} >Buy now</button>
            </div>
          </div>
        </div>
        }
</div>
       </div>
    </div>
   
    </>
  )
}

export default Viewproduct



{/* <div className="row g-0">
    <div className="col-md-4">
      <img src={userData.imgUrl} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{`Title: ${userData.title}`}</h5>
        <p className="card-text">{`Price:${userData.price}`}</p>
        <p className="card-text"><small className="text-muted"><h6>Description:</h6>lorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam</small></p>
        <button className="btn btn-outline-dark mt-auto" style={{backgroundColor:"rgb(255, 119, 77)"}} onClick={()=>handleToBuy(product)} >Buy now</button>
      </div>
    </div>
  </div> */}