import React from 'react';
import { Link } from "react-router-dom";
import menu from '../../assets/image/hamb-menu.png';
import glass from '../../assets/image/magnifying-glass.png';

const Navbar =()=> {
  return (
    <div className='navbar navbar-home'>
      <img src={menu} className='icon'/>
      <h1>Food Items</h1>
      <img src={glass} className='icon'/>
    </div>
  )
}

export default Navbar
