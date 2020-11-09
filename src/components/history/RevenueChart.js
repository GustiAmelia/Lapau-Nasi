import React from 'react';
import {Line} from 'react-chartjs-2';

const RevenueChart =()=> {

  const data = {
    labels: ['January', 'February', 'March',
    'April', 'May'],
    datasets: [
    {
    label: 'Rainfall',
    fill: false,
    lineTension: 0.5,
    backgroundColor: 'rgba(75,192,192,1)',
    borderColor: 'rgba(0,0,0,1)',
    borderWidth: 2,
    data: [20, 59, 70, 81, 10],
    }
    ],
  }

  const options ={
    legend:{
      display:true,
      position:'bottom'
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
        <select id="category" className="filter" >
          <option defaultValue>Month</option>
          <option>Year</option>
        </select>
      </div>
      <Line data={data} height='60vh'
      options={options}/>
    </div>
  );
};

export default RevenueChart
