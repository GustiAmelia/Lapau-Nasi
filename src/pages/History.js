import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import menu from '../assets/image/hamb-menu.png';
import SideBar from '../components/home/SideBar';
import Card from '../components/history/Card';
import '../components/history/history.css';
import RevenueChart from '../components/history/RevenueChart';
import HistoryTable from '../components/history/HistoryTable';
import {Redirect} from 'react-router-dom';
import ModalLogOut from '../components/modal/ModalLogOut';
import ModalAddProduct from '../components/modal/ModalAddProduct';
import moment from 'moment';

const History =()=> {

  const history = useSelector((state)=>state.history.history);
  const startOfWeek = moment().startOf('week').format('DD MMMM YYYY');
  const endOfWeek = moment().endOf('week').format('DD MMMM YYYY');
  const historyToday = history.filter(item =>{return moment(item.date).format('DD MMMM YYYY') === moment().format('DD MMMM YYYY')})
  const totalIncomeToday = historyToday.reduce((total, item) =>{ return total + item.amount }, 0);
  const historyYesterday = history.filter(item =>{return moment(item.date).format('DD MMMM YYYY') === moment().subtract(1, 'days').format('DD MMMM YYYY')})
  const totalIncomeYesterday = historyYesterday.reduce((total, item) =>{ return total + item.amount }, 0);
  const thisYearIncome= history.filter(item =>{return moment(item.date).format('YYYY') === moment().format('YYYY')}).reduce((total, item) =>{ return total + item.amount }, 0);
  const lastYeatIncome = history.filter(item =>{return moment(item.date).format('YYYY') === moment().subtract(1, 'year').format('YYYY')}).reduce((total, item) =>{ return total + item.amount }, 0);
  const totalOrderThisWeek = history.filter(item =>{
    return moment(item.date).format('DD MMMM YYYY') >= startOfWeek && moment(item.date).format('DD MMMM YYYY') <= endOfWeek })
    .reduce((total, item) =>{ return total + (item.orders.split(',').length) }, 0);
  const totalOrderLastWeek = history.filter(item =>{
    return moment(item.date).format('D') >= moment().startOf('week').format('D') - 7 && moment(item.date).format('DD MMMM YYYY') < startOfWeek })
    .reduce((total, item) =>{ return total + (item.orders.split(',').length) }, 0);
  const historyThisMonth = history.filter(item=>{return moment(item.date).format('MMMM') === moment().format('MMMM')});
  
  const income ={
    totalIncomeToday,
    totalIncomeYesterday,
    thisYearIncome,
    lastYeatIncome,
    totalOrderThisWeek,
    totalOrderLastWeek
  }
  const isLogin = useSelector((state)=>state.auth.isLogin)
  if(isLogin === false) return <Redirect to='/signin'/>

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
          <Card income ={income}/>
          <RevenueChart/>
          <HistoryTable/>
        </div>
      </div>
      <ModalAddProduct/>
      <ModalLogOut/>
    </div>
  )
}

export default History
