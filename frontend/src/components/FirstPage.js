import React from 'react';
import { Link } from 'react-router-dom';
import './firstpage.css';

export default function NavBar() {
  return <div className='firstpage1'>
     <h1 className='head'>Click here to login or sign up</h1>
      <div className="navbar1">
        <Link className="nav1" to="signin">Sign In </Link>
        <Link className="nav2" to="signup">Sign Up </Link>
      </div>
    </div>
}
