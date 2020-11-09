import React from 'react';
import {Line} from 'react-chartjs-2';

const RevenueChart =()=> {

  const data = {
    labels: ['January', 'February', 'March',
    'April', 'May', 'June', 'July','August','September','October','November', 'December'],
    datasets: [
    {
    label: 'This Month',
    fill: false,
    lineTension: 0.5,
    backgroundColor: 'rgba(75,192,192,1)',
    borderColor: '#00F1FF',
    borderWidth: 2,
    data: [20, 59, 70, 81, 10, 60,15,55, 34,78,49,73],
    },
    {
      label: 'Last Month',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: '#FFB8C6',
      borderWidth: 2,
      data: [10, 48, 70, 62, 19, 69, 58, 12, 45, 74, 39, 40],
      }
    ],
  }

  const options ={
    legend:{
      display:true,
      position:'bottom',
    },
    scales :{
      yAxes :[
        {
          ticks :{
            min:0,
            max:100,
            stepSize:10,
          }
        }
      ]
    }
  }
  return (
    <div className='chart-wrapper'>
      <div className='header-chart'>
        <h1>Revenue</h1>
        <div className="dropdown">
          <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Month
          </button>
          <div className="dropdown-menu">
            <input type='month' className='month'/>
          </div>
        </div>
      </div>
      <Line data={data} height='60vh'
      options={options}/>
    </div>
  );
};

export default RevenueChart
