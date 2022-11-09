import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Home/lo.jpg"
function Navbar({cart,username}) {
  return (
    <>
    <div className="container">
    <a className="navbar-brand fw-bold" href="#">
      <img src={Logo} alt="" width="60" height="50" className="d-inline-block align-text-top"/>
       Shopp.<span style={{color:"rgb(240, 82, 52)"}}>my</span>
    </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-3">
              <Link to={"/home"}className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={"/products"} className="nav-link fw-bold" >viewproducts</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={"/history"} className="nav-link" >history</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={"/"} className="nav-link" >logout</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to={"/register"} className="nav-link">register</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="##" className="nav-link"><span><u><strong style={{color:"rgb(255, 119, 77)",textTransform:"capitalize"}}><i className="fa-solid fa-user me-2"></i>{username}</strong></u></span></Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/cart" className="btn btn-outline-dark"  type="submit">
            <i className="fa-solid fa-cart-shopping me-2"></i>
              Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
           
            </Link>
          </form>


        </div>
      </div>
    </>
  )
}

export default Navbar