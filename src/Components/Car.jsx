import axios from 'axios'
import React, { useState } from 'react'

function Car() {
    const [formData,SetFormdata]=useState({
        name:'',
        email:'',
        phone:'',
        carModel:'',
        reservationDate:''
    })

    const submitHandler =(e)=>{
       SetFormdata({...formData,[e.target.name]:e.target.value})
    }

    const handler =async(e)=>{
        e.preventDefault()
        
        const result = await axios.post('https://car-reservation-form.onrender.com/User',formData)
        console.log(result)

        console.log("Form submitted:", formData);
        alert("Form submitted successfully!");
       
    }
  return (
    <div>
       <div className="container">
        <div className="row p-3 m-4">
           <div className="col-md-6 m-auto ">
           <div className="card">
            <h3 className='p-3 text-uppercase text-center text-success'>Reservation form</h3>
                <form action="" onSubmit={handler} className='was-validated p-3'>
                   <div className="data">
                   <label htmlFor="name" className='form-label fw-bold'>Name</label>
                    <input type="text" className='form-control' name='name'  id='name' value={formData.name}   onChange={submitHandler} required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                   </div>
                   <div className="data">
                   <label htmlFor="email" className='label-control fw-bold'>Email</label>
                    <input type="text" className='form-control' name='email'  id='email' value={formData.email}   onChange={submitHandler} required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                   </div>
                   <div className="data">
                   <label htmlFor="phone" className='label-control fw-bold'>Phone</label>
                    <input type="text" className='form-control' name='phone'  id='phone' value={formData.phone}   onChange={submitHandler} required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field.</div>
                   </div>
                   <div className="data">
                   <label htmlFor="carModel" className='label-control fw-bold'>CarModel</label>
                    <input type="text" className='form-control' name='carModel'  id='carModel' value={formData.carModel}   onChange={submitHandler} required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out this field..</div>
                   </div>
                   <div className="data">
                   <label htmlFor="reservationDate" className='label-control fw-bold'>Reservation</label>
                    <input type="Date" className='form-control' name='reservationDate'  id='reservationDate' value={formData.reservationDate}   onChange={submitHandler} required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback ">Please fill out this field.</div>
                    <button type='submit' className='btn btn-success text-center w-100'>Submit</button>
                   </div>
                </form>
            </div>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Car