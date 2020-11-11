import React from 'react';
import {useSelector} from 'react-redux';
import {Line} from 'react-chartjs-2';
import moment from 'moment'

const RevenueChart =()=> {

  const history = useSelector((state)=>state.history.history);
  const startOfMonth = moment().startOf('month').format('DD MMMM YYYY');
  const endOfMonth = moment().endOf('month').format('DD MMMM YYYY');
  

  const data = {
    labels:[1,2,3,4,5,6,7,8,9,10,11,12],
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
      <Line data={data} height={60}
      options={options}/>
    </div>
  );
};

export default RevenueChart
