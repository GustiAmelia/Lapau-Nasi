import React from 'react';

const ModalCheckout =()=> {

  const pesanan = [
    {name:'expresso', price:10000 ,id:1},
    {name:'capuucino', price:10000 ,id:2},
    {name:'susu jahe', price:10000 ,id:3},
    {name:'susu jahe', price:10000 ,id:3},
    {name:'susu jahe', price:10000 ,id:3},
  ]
  return (
    <div className="modal fade" id="modalCheckout" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className='header'>
              <h6 style={{fontSize:' 1.875em'}}>Checkout</h6>
              <h6 className='text-modalcheckout'>Receipt no: #6325890</h6>
            </div>
            <h6 className='text-modalcheckout-cashier'>Cashier :  Pevita Pearce</h6>
            {pesanan.map((item,index)=>{
              return (
                <div className='order-wrapper' key={index}>
                  <h6 className='text-modalcheckout'>{item.name}</h6>
                  <h6 className='text-modalcheckout'>{item.price}</h6>
                </div>
              )
            })}
            <div className='ppn-wrapper'>
              <h6 className='text-modalcheckout'>Ppn 10%</h6>
              <h6 className='text-modalcheckout'>10000</h6>
            </div>
          </div>
          <div className='footer'>
            <h6 className='total-price'>Total: Rp.1.000.000,00</h6>
            <h6 className='payment'>Payment : Cash</h6>
            <button type="button" className="btn btn-lg btn-block btn-print" >Print</button>
            <h6 className='or'>Or</h6>
            <button type="button" className="btn btn-lg btn-block btn-send">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCheckout;
