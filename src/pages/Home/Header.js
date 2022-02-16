import React from 'react';
import './Home.css';

const Header = () => {
  return (
    <div className='header'>
         <div className='header__bar'>
        <div className='header__option'>
        <div className='header__user'>
        <span>
        user name
        </span>
       </div> 
       <div className='header__option'>
         <button className='header__button'>
           Login/Signup
         </button>
       </div>
        
        </div>
         
      </div>
    </div>
  )
}

export default Header