import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

function Home() {
    // const users=useSelector((state)=>state.users)
    const users=useSelector((state)=>state.user)
    const dispatch=useDispatch();

    const handleDelete=(id)=>{
      dispatch(deleteUser({id:id}))
    }
  return (
    <div className='container'>
        <h2>Crus App With Json Server</h2>
        <Link to="/create" className='btn btn-success my-3'>Create +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>(
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-primary'>Update</Link>
                            <button onClick={()=>handleDelete(user.id)} className='btn btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
      
    </div>
  )
}

export default Home
