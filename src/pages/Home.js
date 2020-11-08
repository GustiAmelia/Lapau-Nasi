import React,{useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import '../components/home/home.css';
import Navbar from '../components/home/Navbar';
import SideBar from '../components/home/SideBar';
import CardMenu from '../components/home/CardMenu';
import Cart from '../components/home/Cart';
import {getAllMenus,getCategory} from '../redux/actions/menu';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalAddProduct from '../components/modal/ModalAddProduct';
import {Redirect} from 'react-router-dom';
import ModalLogOut from '../components/modal/ModalLogOut';
import {getHistoryCreator} from '../redux/actions/history';

toast.configure()
const Home =()=> {

  const dispatch = useDispatch();

  const data = useSelector((state)=>state.menu.menus);
  // const [page,setPage]=useState(1);
  // const [menu,setMenu]=useState([]);
  // const [loading,setLoading]=useState(true);

  // const handleScroll = e => {
  //   const { scrollTop, clientHeight, scrollHeight} = e.currentTarget;
    
  //   if(scrollHeight - scrollTop === clientHeight){
  //     setPage (prev => prev + 1);
  //   }
  // }

  useEffect(()=>{
    // const loadMenu = ()=>{
    //   setLoading(true);
    //   dispatch(getAllMenus(page));
    //   setMenu((prev) => [...prev,...data]);
    //   setLoading(false);
    // }
    // loadMenu();
    dispatch(getAllMenus(2));
    dispatch(getCategory());
    dispatch(getHistoryCreator())
  },[])

  
  const isLogin = useSelector((state)=>state.auth.isLogin)
  if(isLogin === false) return <Redirect to='/signin'/>
  
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
      <ModalAddProduct/>
      <ModalLogOut/>
    </div>
  );
};

export default Home;
