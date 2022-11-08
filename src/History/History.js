import React from 'react'
import Lottie from 'react-lottie';
import Navbar from '../Home/Navbar';
import animationData from "./lottie/data1.json";
function History({cart}) {
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
    <div className="row">
    <Lottie options={defaultOptions}
                   height={600}
                   width={800}
                   />
    </div>
</div>
   </>
  )
}

export default History