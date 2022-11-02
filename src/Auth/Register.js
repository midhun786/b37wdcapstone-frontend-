import React from "react";

import { useFormik } from "formik";
import axios from "axios";
import { Link} from "react-router-dom";
import { env } from "../config";

function Register() {
//   let navigate = useNavigate();
//   let username = "abc";
//   let pass = "123";
//   let login = () => {
//     if (username == "abc" && pass == "123") {
//         navigate("/portal/dashboard");
//     } else {
//       alert("Worng data");
//     }
//   };

  let formik = useFormik({
    initialValues: {
      username:"",
      name:"",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if(values.username ===""){
        errors.username= "please enter username"
      }
      if (values.name === "") {
        errors.name = "Please enter name "
      }
      if (values.email === "") {
        errors.email = "Please enter email"
      }
      if (values.password === "") {
        errors.password = "Please enter password"
      }
    return errors;
    }, 
    onSubmit: async (values) => {
      // try {
      //   await axios.post(`${env.api}/register`, values);
      //   alert("successfully registered")
      // } catch (error) {
      //   alert(error.response.messsage)
      //   console.log(error);
      // }
    },
  });
  return (
   
    <div className="container">
    <span className="row d-flex align-content-center justify-content-center ">
      <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
        {/* <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-12 col-md-9"> */}
        <div className="card o-hidden border-0 shadow-lg  mt-5 transp pt-2 d-flex align-content-center">
          <div className="card-body p-2">
            {/* <!-- Nested Row within Card Body --> */}
          <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="p-0">

                  
                  <div className=" card-header text-center">
                    <h1 className="h4  myname">
                      Welcome To Register Page!
                    </h1>
                  </div>


                    <form className="user" onSubmit={formik.handleSubmit}>
                    <div className="form-group">      
                        <input
                          className={`form-control ${formik.errors.username ? `input-error` : ``}`}
                          type={"text"}
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          name="username"
                          placeholder="Username"
                        />
                         <span style={{ color: "red" }}>{formik.errors.username}</span>
                      </div><br/>
                     
                    <div className="form-group">      
                        <input
                          className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                          type={"text"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name="name"
                          placeholder="Enter Name"
                        />
                         <span style={{ color: "red" }}>{formik.errors.name}</span>
                      </div><br/>
                      <div className="form-group">      
                        <input
                          className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                          id="exampleInputEmail"
                          type={"email"}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Enter Email Address..."
                        />
                         <span style={{ color: "red" }}>{formik.errors.email}</span>
                      </div><br/>
                      <div className="form-group">
                        <input
                         className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                          id="exampleInputPassword"
                          type={"password"}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder="Password"
                          name="password"
                        />
                        <span style={{ color: "red" }}>{formik.errors.password}</span>
                      </div><br/>
                     

                      <button
                        type="submit"
                        className="btn btn-danger btn-user fw-bold btn-block myname" style={{backgroundColor:"rgb(255, 119, 77)"}}
                      >
                        REGISTER
                      </button>
                    </form>
                    <div className='text-center fw-bold p-3 mt-2'>
                    <p>Already a member? <Link to={"/"} style={{color:"rgb(255, 119, 77)"}}>Sign In</Link>
                        </p>
                    
                    </div>
                 
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </span>
        </span>
      </div>
  );
}

export default Register;