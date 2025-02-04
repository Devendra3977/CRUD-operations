import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  // const [userdata, setUserdata] = useState([]);
  const {id} = useParams();
const [val, setVal] = useState({
    name:"",
    email:"",
    phone:""
});
const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res => setVal(res.data))
    .catch(err => console.log(err));
  },[]);

  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+ id, val)
    .then(res => {
        navigate('/');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100 w-100vw'>
    <div className='w-50 border bg-white shadow p-5 rounded'>
         <h1>Update User</h1>
         <form onSubmit={handleUpdate}>
             <div className='mb-2'>
                 <label htmlFor='name'>Name:</label>
                 <input type='text' name='name' className='form-control' placeholder='Enter Name'
                  value={val.name} onChange={e=>setVal({...val, name: e.target.value})}/>
             </div>
             <div className='mb-2'>
                 <label htmlFor='email'>Email:</label>
                 <input type='email' name='email' className='form-control' placeholder='Enter Email'
                  value={val.email} onChange={e=>setVal({...val, email: e.target.value})}/>
             </div>
             <div className='mb-2'>
                 <label htmlFor='mobile'>:</label>
                 <input type='text' name='phone' className='form-control' placeholder='Enter Mobile Number'
                   value={val.phone} onChange={e=>setVal({...val, phone: e.target.value})}/>
             </div>
              <button className='btn btn-success'>Update</button>
              <Link to='/' className="btn btn-danger ms-3">Cancel</Link>

         </form>
    </div>
 </div>
  )
}

export default Update
