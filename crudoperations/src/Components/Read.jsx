import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';

const Read = () => {
  const [userdata, setUserdata] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    axios.get('http://localhost:3000/users/' + id)
    .then(res => setUserdata(res.data))
    .catch(err => console.log(err));
  },[])

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className="w-50 border bg-white shadow px-5 py-5 rounded">
        <h3>Deatails of User</h3>
        <div className="mb-2">
          <strong>Name: {userdata.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {userdata.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Phone: {userdata.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-danger ms-2'>Back</Link>
      </div>
    </div>
  )
}

export default Read
