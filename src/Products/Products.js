// import { Card } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie'
import Card from '../Home/Card'
import Navbar from '../Home/Navbar'
import animationData from "./lottie/93948-wait-loading-animation.json"

function Products({cart,data,isloading,handleToCart}) {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
   <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Navbar cart={cart} ></Navbar>
      </nav>
      <div className="container">
        <section className="row py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                   isloading?<><Lottie options={defaultOptions}
                   height={400}
                   width={400}
                   /></>:data.map((item)=>{
                      return <Card item={item} handleToCart={handleToCart}></Card>
                    })
                   }
                </div>
                </div>
              </section>
        </div>
   </>
  )
}

export default Products