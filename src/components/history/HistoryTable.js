import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import moment from 'moment';

const HistoryTable =()=> {

  const history = useSelector((state)=>state.history.history);
  
  return (
    <div className='table-wrapper'>
      <div className='header-table'>
        <h1>Recent Order</h1>
        <div className="dropdown">
          <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Month
          </button>
          <div className="dropdown-menu">
            <input type='month' className='month'/>
          </div>
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">INVOICES</th>
            <th scope="col">CASHIER</th>
            <th scope="col">DATE</th>
            <th scope="col">ORDERS</th>
            <th scope="col">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{item.invoice}</td>
                <td>{item.cashier}</td>
                <td>{moment(item.date).format('DD MMMM YYYY')}</td>
                <td>{item.orders.split(',').join(', ')}</td>
                <td>{item.amount.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTable
