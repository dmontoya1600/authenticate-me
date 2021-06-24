import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <a onClick={logout}>Log Out</a>
        <NavLink class='userPage' to={`/user/${sessionUser.id}`} >Profile</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className='login'>Log In</NavLink>
        <NavLink to="/signup" className='signup'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='topnav'>
      <NavLink exact to="/" className='home'>Home</NavLink>
      {isLoaded && sessionLinks}
    </div>


  );
}

export default Navigation;
