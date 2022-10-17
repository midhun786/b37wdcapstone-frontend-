import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { env } from './config';


function Confirm() {
    const test = useParams()
    let formik = useFormik({
        initialValues: {
            password: ""
        },
        validate: (value) => {
            let errors = {}
            //password;
            if (value.password.length ==="") {
                errors.password = "border border-info"
            }
            return errors
        },
        onSubmit: async (User) => {
            try {
                await axios.post(`${env.api}/Reset-password/${test.id}/${test.token}`, User);
                Swal.fire({ title: 'Welcome', text: 'Updated Done', icon: 'success', confirmButtonText: 'Login'});
            } catch (error) {
                Swal.fire({ title: `${error.response.data.Message}`, icon: 'warning', confirmButtonText: 'Try Again' });
            }
        }
    });
    return (
        <>
            <span className='container'>
                <span className='row d-flex align-content-center justify-content-center mt-5'>
                    <span className='col-lg-5 col-md-7 col-sm-9 border rounded rounded check mt-5'>

                        {/* -------------------Forget form-------------------- */}
                        <form className='mt-5' onSubmit={formik.handleSubmit}>


                            {/* <!-- email input --> */}
                            <div className="form-outline mb-4">
                                <input type="password" id="registeremail" className={`form-control bg-transparent text-white ${formik.errors.password}`} value={formik.values.password} onChange={formik.handleChange} name="password" />
                                <label className="form-label text-white" for="registeremail">New Password</label>
                            </div>

                            {/* <!-- Conform --> */}
                            {/* <div className="form-outline mb-4">
                                <input type="password"  className="form-control bg-transparent text-white" />
                                <label className="form-label text-white" for="registeremail">Conform your New password</label>
                            </div> */}

                            {/* <!-- Submit button --> */}
                            <button type="submit" className="btn btn-danger btn-sm btn-block mb-3" disabled={!formik.isValid}>Click to Update Password</button>
                        </form>

                        {/* <!-- Pills content --> */}
                    </span>
                </span>
            </span>
        </>
    )
}

export default Confirm;