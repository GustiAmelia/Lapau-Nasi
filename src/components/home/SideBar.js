import React from 'react';
import fork from '../../assets/image/fork.png';
import clipboard from '../../assets/image/clipboard.png';
import add from '../../assets/image/add.png';
import ModalAddProduct from '../modal/ModalAddProduct';

const SideBar =()=> {
  return (
    <div className='sidebar'>
      <img src={fork} className='icon-sidebar-fork' alt='...'/>
      <img src={clipboard} className='icon-sidebar' alt='...'/>
      <img src={add} className='icon-sidebar' alt='...' type='button' data-toggle="modal" data-target="#modalAddProduct"/>
      <ModalAddProduct/>
    </div>
  )
}

export default SideBar
