import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CartLoop from './CartLoop'
import CartSummary from './CartSummary'

function Cart() {
  const location=useLocation();
  let product = location.state.value
  let total=location.state.total
  let remove=location.state.removeFromCart
  // console.log(remove)
  // console.log(product);
  // console.log(total);
  // console.log(removeFromCart);
  // console.log(product)
  // let popular=location.state.setValues
  // console.log(popular)
  const [initialValues,setInitialValues]=useState(1)
  let handleIncrement=()=>{
    if(initialValues!=0){
    setInitialValues(initialValues+1)
    }
  }
  let handleDecrement=()=>{
    if(initialValues>1){
    setInitialValues(initialValues-1)
    }
  }
  return (
    <>
   <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        {/* <CartLoop product={product}></CartLoop> */}
        {
          product.map((item)=>{
            return <CartLoop item={item} total={total} remove={remove} initialValues={initialValues} handleIncrement={handleIncrement} handleDecrement={handleDecrement}></CartLoop>
          })
        }
    </div>
      <CartSummary total={total} initialValues={initialValues}></CartSummary>
    </div>
  </div>
</section>
    </>
  )
}

export default Cart

// <--------------------------extra content---------------------->

// <div class="card mb-4">
// <div class="card-body">
//   <p><strong>Expected shipping delivery</strong></p>
//   <p class="mb-0">12.10.2020 - 14.10.2020</p>
// </div>
// </div>
// <div class="card mb-4 mb-lg-0">
// <div class="card-body">
//   <p><strong>We accept</strong></p>
//   <img class="me-2" width="45px"
//     src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
//     alt="Visa" />
//   <img class="me-2" width="45px"
//     src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
//     alt="American Express" />
//   <img class="me-2" width="45px"
//     src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
//     alt="Mastercard" />
// </div>
// </div>