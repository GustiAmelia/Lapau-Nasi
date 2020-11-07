import React,{useEffect} from 'react';
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

  useEffect(()=>{
    dispatch(getAllMenus(1,6));
    dispatch(getCategory());
    dispatch(getHistoryCreator())
  },[])

  const data = useSelector((state)=>state.menu.menus);

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
