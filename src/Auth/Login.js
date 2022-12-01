import axios from 'axios';
import React from 'react'
import Logo from "../Home/lo.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import Swal from 'sweetalert2';
import { env } from '../config';


function Login() {

  let navigate = useNavigate();

  // let handleforgot = () => {
  //   navigate("/forgotpassword")
  // }
  // let handleLogin = () => {
  //   navigate("/home")
  // }
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
      try {
      let user= await axios.post(`${env.api}/login`,values)
      let hooker=user.data.hook
      if(user.data.token){
        navigate("/home",{state:hooker})
        window.localStorage.setItem("app-token",user.data.token)
        Swal.fire({ title: 'Welcome to Shopp.my', text: 'login successfull', icon: 'success', confirmButtonText: 'welcome to home'});
      }else{
        alert("password/email is wrong")
       }
      } catch (error) {
        console.log("errors")
        Swal.fire({ title: 'user not found', text: 'please try again', icon: 'warning', confirmButtonText: 'please sign up'});
      }
    }

   })

  
  return (
    // <!-- Section: Design Block -->
    <section className="">
      {/* <!-- Jumbotron --> */}
      <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: " hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2Qj9qFKYDdfpmkD2DEBpk641QSI-tr7CLrCZZ01xSRNO4p56rkjXiFTr5ZzEdX_4i2Q&usqp=CAU" style={{ width: "70px", height: "70px" }}></img>
               Shopp.
                <span style={{color:"rgb(255, 119, 77)"}} >my</span>
              </h1>
              <p style={{ color: " hsl(217, 10%, 50.8%)" }}>
              Shopp.my was founded in the garage of Bezos' rented home in Bellevue, Washington. Bezos' parents invested almost $250,000 in the start-up. On July 16, 1995, Shopp.my opened as an online bookseller, selling the world's largest collection of books to anyone with World Wide Web access.
              <br/><br/><br/><strong>User credential :midhunkumarengineer98@gmail.com</strong>
              <br/><br/><strong>Password  :12345678</strong>
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={formik.handleSubmit}>

                    {/* <!-- Email input --> */}
                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type={"email"}  id="exampleFormControlInput1" placeholder="Please enter your Email"  required
                       className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                      value={formik.values.email} 
                      onChange={formik.handleChange}
                      name="email"/>
                       <span style={{ color: "red" }}>{formik.errors.email}</span>
                    </div>

                    <div className="mb-3">
                      <label for="exampleFormControlInput1" className="form-label">Password</label>
                      <input type={"Password"}  id="exampleFormControlInput1" placeholder="password" required
                      className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                       value={formik.values.password} 
                       onChange={formik.handleChange}
                       name="password"/>
                        <span style={{ color: "red" }}>{formik.errors.password}</span>
                    </div>


                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    {/* <!-- Submit button --> */}
                    <button type="submit" className="btn btn-danger btn-block mb-4" style={{backgroundColor:"rgb(255, 119, 77)"}}>
                      Login
                    </button>

                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                      <div> <Link to={"/Reset"} style={{ color: "rgb(255, 119, 77)" }}>forgotpassword</Link></div> &nbsp;
                      <p>or sign up with:<Link to={"./register"} style={{ color: "rgb(255, 119, 77)" }}>Register</Link></p>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button type="button" style={{ color: "rgb(255, 119, 77)" }} className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
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