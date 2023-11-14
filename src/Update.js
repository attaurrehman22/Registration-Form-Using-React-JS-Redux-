import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';

function Update() {
    const navigate=useNavigate();
    const {id}=useParams();
    const users=useSelector((state)=>state.user)
    const existinguser=users.filter(f=>f.id==id);
    const {name,email}=existinguser[0];
    const [uname,setName]=useState(name);
    const[uemail,setEmail]=useState(email);
    const dispatch=useDispatch();

    const handleUpdate=(event)=>{
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email,uemail
        }))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor='name'>Name :</label>
                <input type='text' name='name' placeholder='Enter name' className='form-control' value={uname} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor='email'>Email :</label>
                <input type='email' name='email' placeholder='Enter Email' className='form-control' value={uemail} onChange={e=>setEmail(e.target.value)}/>

            </div>
            <button className='btn btn-info mt-5'>Update</button>
        </form>
    </div>
</div>
  )
}

export default Update
