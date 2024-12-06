import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Grounds } from './Data/vamsi';
function App() {
  

  const handler = (price) => (e) => {
    e.preventDefault();
    
     var options = {
      key: "rzp_test_W1oT8Zcu6E3Jrk",
      key_secret: "DII6Ec88ZrD5mxrtucM9IC8h",
      amount:parseInt(price) * 100,
      currency: "INR",
      name: "QuickTime",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("payment id", paymentId);
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }
  
  return (
    <>
      <div className='k'>
        {Grounds.map((item)=>{
          return(
            <div className='one'>
              <img src={item.image} alt=''></img><br></br>
              <p>{item.price}/-</p>
              <button className='btn btn-primary' onClick={handler(item.price)}>Book Now</button>
            </div> 
          )
        })}

        
      </div>  
    </>
  )
}

export default App
