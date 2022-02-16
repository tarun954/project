import React from 'react'
import Header from '../Home/Header'
import './Grocery.css'

const Grocery = () => {
  return (
    <div>
    <Header/>
       
      <div className='grocery'>
      <span className='span'>
           
     Grocery
      </span>
       
       
     
       
       
    <input type='text' placeholder='type here...' />
    <button>
        Search
    </button>
      </div>
      </div>
       
    
  )
}

export default Grocery