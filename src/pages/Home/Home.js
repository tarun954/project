import React from 'react';
import Body from '../body/Body';
import Header from './Header';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Body/>
    </div>
  )
}

export default Home