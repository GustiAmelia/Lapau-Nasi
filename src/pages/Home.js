import React from 'react';
import '../components/home/home.css';
import Navbar from '../components/home/Navbar';
import SideBar from '../components/home/SideBar';
import CardMenu from '../components/home/CardMenu';
import Cart from '../components/home/Cart';

const Home =()=> {
  
  const data =[
    {name:'Espresso',price:1000,id:1},
    {name:'Cappucino',price:1000,id:2},
    {name:'Coffee Latte',price:1000,id:3},
    {name:'Nasi Goreng',price:1000,id:4},
    {name:'Ayam Gulai',price:1000,id:5},
    {name:'Ayam Bumbu',price:1000,id:6},
    {name:'Ayam Bakar',price:1000,id:7},
    {name:'Nasi Kuning',price:1000,id:8},
    {name:'Nasi Bakar',price:1000,id:9},
    {name:'Nasi Bumbu',price:1000,id:10},
  ]
  return (
    <div className='row no-gutters home'>
      <div className='col col-md-8'>
        <Navbar/>
        <div className='row no-gutters content-home'>
          <div className='col col-md-1'>
            <SideBar/>
          </div>
          <div className='col col-md-11'>
            <div className='row row-cols-1 row-cols-md-3 menu'>
              {data.map((menu,index)=>{
                return(
                  <CardMenu menu={menu} key={index}/>
                )})}
            </div>
          </div>
        </div>
      </div>
      <div className='col col-md-4'>
        <Cart/>
      </div>
    </div>
  );
};

export default Home;
