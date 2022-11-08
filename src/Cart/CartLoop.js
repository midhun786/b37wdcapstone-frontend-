import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CartLoop({ele,handleToRemove,handleIncre,handleDecre,initialValues}) {

  let removeFromCart=(ele)=>{
    handleToRemove(ele)
  }

  let handleIncrement=()=>{
    handleIncre()
  }
  let handleDecrement=()=>{
    handleDecre()
  } 
return (
  <>
   <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart-items</h5>
          </div>
      <div className="card-body">
            <div className="row">
              <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src={ele.imgUrl}
                    className="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                  </a>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>{ele.title}</strong></p>
                <p>price:{ele.price}</p>
                <p>Size: M </p>    
                <button type="button" onClick={()=>removeFromCart(ele)} className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                  title="Remove item">
                  <i className="fas fa-trash"></i>
                </button>
                <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                  title="Move to the wish list">
                  <i className="fas fa-heart"></i>
                </button>
             </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                 <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button className="btn btn-primary px-3 me-2"
                    onClick={()=>handleDecrement()}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline fw-bold">
                    <input id="form1" min="1" name="quantity" value={initialValues} type="number" className="form-control"  placeholder='quantity'/>
                  </div>

                  <button className="btn btn-primary px-3 ms-2"
                   onClick={()=>handleIncrement()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
             <p className="text-start text-md-center">
                  <strong>${ele.price*initialValues}</strong>
                </p>
              </div>
            </div>
           <hr className="my-4" />
      </div>
  </div>
</> 
)
}

export default CartLoop;

