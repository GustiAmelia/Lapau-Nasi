import React from 'react';

const HistoryTable =()=> {
  return (
    <div className='table-wrapper'>
      <div className='header-table'>
        <h1>Revenue</h1>
        <select id="category" className="" >
          <option defaultValue>Month</option>
          <option>Year</option>
        </select>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HistoryTable
