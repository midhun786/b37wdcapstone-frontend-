import React from 'react'
import { useState } from 'react'

function Card({item,handleToCart,removeFromCart}) {
 
  return (
   <>
    <div class="col mb-5">
                        <div class="card h-100">
                         
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>
                            
                            <img class="card-img-top" src={item.imgUrl} alt="..." />
                       
                            <div class="card-body p-4">
                                <div class="text-center">
                                   
                                    <h5 class="fw-bolder">{item.title}</h5>
                                 
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                        <div class="bi-star-fill"></div>
                                    </div>
                                    
                                    <span class="text-muted ">Price:</span>
                                  ${item.price}
                                </div>
                            </div>
                          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center">
                                <button class="btn btn-outline-dark mt-auto" onClick={()=>handleToCart(item)} >Add to cart</button></div>
                                <button class="btn btn-outline-dark mt-auto " onClick={()=>removeFromCart(item)} >remove from cart</button></div>
                          </div>
                        </div>
                   
   </>
  )
}

export default Card