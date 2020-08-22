import React, { Component } from 'react';

class LeftSideBar extends Component {
  render() { 
    return (  
      <div className='leftSideBar'>
        <img src={process.env.PUBLIC_URL + './images/fork.png'} alt=""/>
        <img src={process.env.PUBLIC_URL + './images/clipboard.png'} alt=""/>
        <img src={process.env.PUBLIC_URL + './images/add.png'} alt=""/>
      </div>
    );
  }
}
 
export default LeftSideBar;