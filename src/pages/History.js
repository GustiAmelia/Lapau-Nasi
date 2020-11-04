import React from 'react';
import menu from '../assets/image/hamb-menu.png';
import SideBar from '../components/home/SideBar';
import Card from '../components/history/Card';
import '../components/history/history.css';
import RevenueChart from '../components/history/RevenueChart';
import HistoryTable from '../components/history/HistoryTable';

const History =()=> {
  return (
    <div className='history'>
      <div className='navbar navbar-history'>
        <img src={menu} alt='' className='icon'/>
        <h1>History</h1>
        <h1></h1>
      </div>
      <div className='row no-gutters content-history'>
        <div className='col col-md-1'>
          <SideBar/>
        </div>
        <div className='col col-md-11'>
          <Card/>
          <RevenueChart/>
          <HistoryTable/>
        </div>
      </div>
    </div>
  )
}

export default History
