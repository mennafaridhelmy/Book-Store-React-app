import React from 'react';
import {useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction} from '../../redux/actions/actions';
import "./style.css"


const TopBar = () => {

  const loggeduser = useSelector(state=>state.loggedInUserroot);

  const dispatch = useDispatch();

  const onSignOut = () =>{
    dispatch(logoutAction());
  }

  return (
    <section className='TopBar'>
      <div className='container content'>
        <div className='d-flex info'>
          <div>  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27ae61" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>
            Brooklyn, NY 10036, United States
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#27ae61" className="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            1-800-123-1234
          </div>
        </div>
        { loggeduser == null ?
          <div className='d-flex links'>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Sign Up</Link>
          </div>
        :
          <div className='d-flex links'>
            <Link to="/account">Account</Link>
            <button className='btn sign-out' onClick={onSignOut}>Sign out</button>
          </div>
        }
      </div>
    </section>
  )
}

export default TopBar;