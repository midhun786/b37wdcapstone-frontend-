import axios from 'axios';
import React from 'react'
import Logo from "../Home/lo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
// import { env } ../config';

function Login() {

  let navigate = useNavigate();

  // let handleforgot = () => {
  //   navigate("/forgotpassword")
  // }
  let handleLogin = () => {
    navigate("/home")
  }
   let formik = useFormik({
     initialValues:{
       email:"",
       password:"",
     },
     validate: (values) => {
      let errors = {}
      //Password;
      if (values.email === "") {
          errors.email = "please enter your email"
      }
      if (values.password === "") {
        errors.password = "please enter your password"
    }
      return errors
  },
     onSubmit:async(values)=>{
      // try {
      // let user= await axios.post(`${env.api}/login`,values)
      // // console.log(user.data.foo)
      // if(user.data.foo){
      //   alert("login successfully")
      // }else{
      //   alert("password/email is wrong")
      //  }
       
      // } catch (error) {
      //   console.log("errors")
       
      // }
      
     }

   })

  
  return (
    // <!-- Section: Design Block -->
    <section class="">
      {/* <!-- Jumbotron --> */}
      <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: " hsl(0, 0%, 96%)" }}>
        <div class="container">
          <div class="row gx-lg-5 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <h1 class="my-5 display-3 fw-bold ls-tight"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2Qj9qFKYDdfpmkD2DEBpk641QSI-tr7CLrCZZ01xSRNO4p56rkjXiFTr5ZzEdX_4i2Q&usqp=CAU" style={{ width: "70px", height: "70px" }}></img>
               Shopp.
                <span style={{color:"rgb(255, 119, 77)"}} >my</span>
              </h1>
              <p style={{ color: " hsl(217, 10%, 50.8%)" }}>
              Shopp.my was founded in the garage of Bezos' rented home in Bellevue, Washington. Bezos' parents invested almost $250,000 in the start-up. On July 16, 1995, Shopp.my opened as an online bookseller, selling the world's largest collection of books to anyone with World Wide Web access.
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card">
                <div class="card-body py-5 px-md-5">
                  <form onSubmit={formik.handleSubmit}>

                    {/* <!-- Email input --> */}
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type={"email"}  id="exampleFormControlInput1" placeholder="Please enter your Email"  required
                       className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                      value={formik.values.email} 
                      onChange={formik.handleChange}
                      name="email"/>
                       <span style={{ color: "red" }}>{formik.errors.email}</span>
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Password</label>
                      <input type={"Password"}  id="exampleFormControlInput1" placeholder="password" required
                      className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                       value={formik.values.password} 
                       onChange={formik.handleChange}
                       name="password"/>
                        <span style={{ color: "red" }}>{formik.errors.password}</span>
                    </div>


                    {/* <!-- Checkbox --> */}
                    <div class="form-check d-flex justify-content-center mb-4">
                      <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                      <label class="form-check-label" for="flexCheckDefault">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {/* <!-- Submit button --> */}
                    <button onClick={()=>{handleLogin()}}  type={"submit"} class="btn btn-danger btn-block mb-4" style={{backgroundColor:"rgb(255, 119, 77)"}}>
                      Login
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                      <div> <Link to={"./forgotpassword"} style={{ color: "rgb(255, 119, 77)" }}>forgotpassword</Link></div> &nbsp;
                      <p>or sign up with:<Link to={"./register"} style={{ color: "rgb(255, 119, 77)" }}>Register</Link></p>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>

  )
}

export default Login