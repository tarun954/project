import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {
  return (
    <div className='body'>
     <Link to='/grocery'>
     <div className='body__left'>
     <span className='items'>
     Groceries
     </span>
    </div>
     </Link>
     <Link to = '/electronic'>
     <div className='body__right'>
    <span className='items'>
        Electronics
    </span>
    </div>
     </Link>
     </div>
  )
}

export default Body