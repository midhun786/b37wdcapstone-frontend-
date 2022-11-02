import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CartLoop({item,remove,total}) {
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
  let removeFromCart=()=>{
      remove();
 }

return (
  <>
   <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart-items</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={item.imgUrl}
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{item.title}</strong></p>
                <p>price:{item.price}</p>
                <p>Size: M </p>    
                <button type="button"  onClick={()=>removeFromCart()} class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i class="fas fa-trash"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i class="fas fa-heart"></i>
                </button>
             </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                 <div class="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button class="btn btn-primary px-3 me-2"
                    onClick={()=>handleDecrement()}  >
                    <i class="fas fa-minus"></i>
                  </button>

                  <div class="form-outline fw-bold">
                    <input id="form1" min="1" name="quantity" value={initialValues} type="number" class="form-control"  placeholder='quantity'/>
                  </div>

                  <button class="btn btn-primary px-3 ms-2"
                   onClick={()=>handleIncrement()} >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
             <p class="text-start text-md-center">
                  <strong>${item.price*initialValues}</strong>
                </p>
              {/* <Link pathname="" state={initialValues}></Link> */}
              </div>
            </div>
           <hr class="my-4" />
      </div>
  </div>
  
  </> 
    
  )
  
}

export default CartLoop;

