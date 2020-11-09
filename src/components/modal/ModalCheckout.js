import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {addTransactionCreator,removeCartCreator,getAllMenus} from '../../redux/actions/menu';

const ModalCheckout =({total})=> {
  const carts = useSelector((state)=>state.menu.carts);
  const user =useSelector((state)=>state.auth.user.data);
  const ppn = total*0.1;
  const payment = total + ppn;

  let invoice = '#' + new Date().getTime();
  const transactionItem = carts.map((item)=>{
    return {
      product_id : item.id,
      quantity : item.quantity,
    }
  })

  const data = {
    invoice,
    cashier:user.fullname,
    amount:payment,
    transaction:transactionItem,
  }

  const dispatch = useDispatch();

  const handlePrintButton = ()=>{
    dispatch(addTransactionCreator(data))
    dispatch(removeCartCreator());
    dispatch(getAllMenus());
  }

  return (
    <div className="modal" id="modalCheckout" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className='header'>
              <h6 style={{fontSize:' 1.875em'}}>Checkout</h6>
              <h6 className='text-modalcheckout'>Receipt no: {invoice}</h6>
            </div>
            <h6 className='text-modalcheckout-cashier'>Cashier :  {user.fullname}</h6>
            {carts.map((item,index)=>{
              return (
                <div className='order-wrapper' key={index}>
                  <h6 className='text-modalcheckout'>{item.product_name} {item.quantity}x</h6>
                  <h6 className='text-modalcheckout'>{(item.price*item.quantity).toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h6>
                </div>
              )
            })}
            <div className='ppn-wrapper'>
              <h6 className='text-modalcheckout'>Ppn 10%</h6>
              <h6 className='text-modalcheckout'>{ppn.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h6>
            </div>
          </div>
          <div className='footer'>
            <h6 className='total-price'>Total: {payment.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h6>
            <h6 className='payment'>Payment : Cash</h6>
            <button type="button" className="btn btn-lg btn-block btn-print" onClick={handlePrintButton} data-dismiss='modal'>Print</button>
            <h6 className='or'>Or</h6>
            <button type="button" className="btn btn-lg btn-block btn-send">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCheckout;
