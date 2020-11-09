import React from 'react';

const Card =({income})=> {
  const incomeRaiseFromYesterdar = ((income.totalIncomeToday-income.totalIncomeYesterday)/income.totalIncomeYesterday)*100;
  let incomeRaiseFromLastYear;
  if(income.lastYeatIncome === 0){
    incomeRaiseFromLastYear = 100
  }
  else{
    incomeRaiseFromLastYear = ((income.thisYearIncome - income.lastYeatIncome)/income.lastYeatIncome)*100;
  }
  const orderRaiseFromYesterday = ((income.totalOrderToday -income.totalOrderYesterday)/income.totalOrderYesterday)*100;

  return (
    <div>
      <div className='row'>
        <div className='col col-sm-6 col-md-4'>
          <div className="card card-history card-today-income">
            <div className="card-content">
              <h6 className='title-card-history'>Today’s Income</h6>
              <h5 className='total-income'>{income.totalIncomeToday.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h5>
              {incomeRaiseFromYesterdar < 0 ? 
                <h6 className='title-card-history'>{incomeRaiseFromYesterdar}% Yesterday</h6>
                :
                <h6 className='title-card-history'>+{incomeRaiseFromYesterdar}% Yesterday</h6>
              }
            </div>
            <div className="buble" style={{left:'70%', top:'5%'}}></div>
            <div className="buble" style={{left:'50%', top:'25%'}}></div>
            <div className="buble" style={{left:'60%', top:'15%'}}></div>
          </div>
        </div>
        <div className='col col-sm-6 col-md-4'>
          <div className="card card-history card-orders">
            <div className="card-content">
              <h6 className='title-card-history'>Orders</h6>
              <h5 className='total-income'>{income.totalOrderToday}</h5>
              {orderRaiseFromYesterday < 0 ? 
                <h6 className='title-card-history'>{orderRaiseFromYesterday}% Yesterday</h6>
                :
                <h6 className='title-card-history'>+{orderRaiseFromYesterday}% Yesterday</h6>
              }
            </div>
            <div className="buble" style={{left:'70%', top:'5%'}}></div>
            <div className="buble" style={{left:'50%', top:'25%'}}></div>
            <div className="buble" style={{left:'60%', top:'15%'}}></div>
          </div>
        </div>
        <div className='col col-sm-6 col-md-4'>
          <div className="card card-history card-this-year-income">
            <div className="card-content">
              <h6 className='title-card-history'>This Year’s Income</h6>
              <h5 className='total-income'>{income.thisYearIncome.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</h5>
              {incomeRaiseFromLastYear < 0 ? 
                <h6 className='title-card-history'>{incomeRaiseFromLastYear}% Last Year</h6>
                :
                <h6 className='title-card-history'>+{incomeRaiseFromLastYear}% Last Year</h6>
              }
            </div>
            <div className="buble" style={{left:'70%', top:'5%'}}></div>
            <div className="buble" style={{left:'50%', top:'25%'}}></div>
            <div className="buble" style={{left:'60%', top:'15%'}}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
