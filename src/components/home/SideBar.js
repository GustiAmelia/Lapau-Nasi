import React from 'react';
import {useSelector} from 'react-redux';
import fork from '../../assets/image/fork.png';
import clipboard from '../../assets/image/clipboard.png';
import add from '../../assets/image/add.png';
import {Link} from 'react-router-dom';
import logout from '../../assets/image/log-out.png'

const SideBar =()=> {

  const isAdmin = useSelector((state)=>state.auth.isAdmin);

  return (
    <div className='sidebar'>
      {isAdmin ?
        <>
          <Link to='/'><img src={fork} className='icon-sidebar-fork' alt='...'/></Link>
          <Link to='/history'><img src={clipboard} className='icon-sidebar' alt='...'/></Link>
          <img src={add} className='icon-sidebar' alt='...' type='button' data-toggle="modal" data-target="#modalAddProduct"/>
          <img src={logout} className='icon-sidebar' alt='...' type='button' data-toggle="modal" data-target="#modalLogout"/>
        </>
        :
        <>
          <Link to='/'><img src={fork} className='icon-sidebar-fork' alt='...'/></Link>
          <img src={logout} className='icon-sidebar' alt='...' type='button' data-toggle="modal" data-target="#modalLogout"/>
        </>
      }
    </div>
  )
}

export default SideBar
