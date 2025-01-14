import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import "./Logout.css";
import { logout,selectUser } from '../features/userSlice';


const Logout = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout())
  };


  return (
    <div className='logout'>
        <h1>Hey,  <span className='user__name'>{user.name}</span></h1>
        <p>your email ID : {user.email}</p>
        <button className='logout__button' onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default Logout