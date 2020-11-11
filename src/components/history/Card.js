import React from 'react';

const Card =({income})=> {
  const incomeRaiseFromYesterdar = Math.round(((income.totalIncomeToday-income.totalIncomeYesterday)/income.totalIncomeYesterday)*100);
  let incomeRaiseFromLastYear;
  if(income.lastYeatIncome !== 0){
    incomeRaiseFromLastYear = Math.round(((income.thisYearIncome - income.lastYeatIncome)/income.lastYeatIncome)*100);
  }
  const orderRaiseFromLastWeek = Math.round(((income.totalOrderThisWeek -income.totalOrderLastWeek)/income.totalOrderLastWeek)*100);

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
              <h5 className='total-income'>{income.totalOrderThisWeek}</h5>
              {orderRaiseFromLastWeek < 0 ? 
                <h6 className='title-card-history'>{orderRaiseFromLastWeek}% Last Week</h6>
                :
                <h6 className='title-card-history'>+{orderRaiseFromLastWeek}% Last Week</h6>
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
              {income.lastYeatIncome === 0 ? 
                null
                :
                incomeRaiseFromLastYear < 0 ? 
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
