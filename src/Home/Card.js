import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Card({item,handleToCart,value}) {
 
  return (
   <>
    <div className="col mb-5 pricing">
                        <div className="card h-100">
                         
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src={item.imgUrl} alt="..." />
                       
                            <div className="card-body p-4">
                                <div className="text-center">
                                   
                                    <h5 className="fw-bolder">{item.title}</h5>
                                 
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted ">Price:</span>
                                  ${item.price}
                                </div>
                            </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <button disabled={value.some((obj)=>obj._id==item._id)} className="btn btn-outline-dark mt-auto" onClick={()=>handleToCart(item)} >Add to cart</button>
                                <Link to={`/viewproduct/${item._id}`} state={{item}} className="btn btn-outline-dark mt-auto" style={{backgroundColor:"rgb(255, 119, 77)"}} >view</Link>
                                </div>
                               </div>
                          </div>
                        </div>
                   
   </>
  )
}

export default Card