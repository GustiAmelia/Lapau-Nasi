import React from 'react';
import fork from '../../assets/image/fork.png';
import clipboard from '../../assets/image/clipboard.png';
import add from '../../assets/image/add.png';

const SideBar =()=> {
  return (
    <div className='sidebar'>
      <img src={fork} className='icon-sidebar-fork' alt='...'/>
      <img src={clipboard} className='icon-sidebar' alt='...'/>
      <img src={add} className='icon-sidebar' alt='...'/>
    </div>
  )
}

export default SideBar
