import React from 'react'
import razorpay from './images/razorpay-icon.png'


function CartSummary({total}) {
   
  const handleSubmit = ()=>{
    if(total === 0){
    alert("purchase any item, Cart is empty");
    }else{
      var options = {
        key: process.env.KEY,
        key_secret:process.env.SECRET,
        amount: total*100,
        currency:"INR",
        name:"Shopp.my",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"midhun",
          email:"midhunkumarengineer98@gmail.com",
          contact:"9025176928"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"rgb(49, 91, 194)"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  
  
  return (
   <>
   <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="card-body">
           {
            total==0?`No items in Cart`: <><ul className="list-group list-group-flush">
            <li
              className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Products
              <span>${total}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li
              className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>${total}</strong></span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-lg btn-block fst-italic" onClick={()=>handleSubmit()}>
           checkout by razorpay
          </button>
          <h5 className="fst-italic" style={{textAlign:"center"}}>powered by <img style={{width:"200px",height:"50px"}} src="https://www.j2store.org/images/extensions/payment_plugins/Razorpay.png"/></h5>
          </>
           }
          </div>
        </div>
      </div>
   </>
  )
}

export default CartSummary

