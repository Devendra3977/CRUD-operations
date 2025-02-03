import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
const [userdata, setUserdata]= useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => setUserdata(res.data))
        .catch(err => console.log(err));
    },[])
    console.log("Hello")

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light'>
       <h1>List of Users</h1>
       <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
            <Link to='/create' className="btn btn-success ">Add Users</Link>
        </div>
            <table className='table table-striped'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        userdata.map((d, i)=> (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <button className='btn btn-sm btn-success me-2'>Read</button>
                                    <button className='btn btn-sm btn-primary me-2'>Edit</button>
                                    <button className='btn btn-sm btn-danger m-2'>Delete</button>
                                </td>   
                            </tr>
                        ))
                    }
                </tbody>
            </table>
       </div>
    </div>
  )
}

export default Home
