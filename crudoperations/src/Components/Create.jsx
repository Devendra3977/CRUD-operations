import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Create = () => {
const navigate = useNavigate();
const [val, setVal] = useState({
    name:"",
    email:"",
    phone:""
});
const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/users', val)
    .then(res => {
        toast.success('User Created Successfully');
        setTimeout(()=>{
            navigate('/');
        },5000);
        
    })
    .catch(err => console.log(err));
}


  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100 w-100vw'>
       <div className='w-50 border bg-white shadow p-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' className='form-control' placeholder='Enter Name'
                    onChange={e=>setVal({...val, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' className='form-control' placeholder='Enter Email'
                     onChange={e=>setVal({...val, email: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='mobile'>:</label>
                    <input type='text' name='phone' className='form-control' placeholder='Enter Mobile Number'
                     onChange={e=>setVal({...val, phone: e.target.value})}/>
                </div>
                 <button className='btn btn-success'>Submit</button>
                 <Link to='/' className="btn btn-primary ms-3">Back</Link>

            </form>
            
       </div>
       <ToastContainer/>
    </div>
  )
}

export default Create
