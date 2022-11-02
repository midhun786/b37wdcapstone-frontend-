// import React from 'react'
// import Advertise from '../ads/ads'
// import Banner from '../banner/Banner'
// import Card from './Card'

// function Bannercard({data,handleToCart}) {
//   return (
//     <>
//     {/* <------------------------start-banner------------------> */}
//     <div className="main mt-5">
//         <div className="container">
//           <div>
//             <Banner />
//           </div>
//         </div>
//       </div>
//        {/* <------------------------cards start------------------> */}
//       <div class="container ">
//         <section class="row py-5">
//             <div class="container px-4 px-lg-5 mt-5">
//                 <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//                    {
//                     data.map((item)=>{
//                       return <Card item={item} handleToCart={handleToCart}></Card>
//                     })
//                    }
//                 </div>
//                 </div>
//               </section>
//         </div>
//         <span>
//      <Advertise></Advertise>
//      </span><br/>
//     </>
//   )
// }

// export default Bannercard