import React, { Component } from 'react';

class Menu extends Component {

 
  render() { 
    let check;
    if(this.props.isCheckListOpen){
      check=(
        <div className="check">
            <div className="check-img">
              <img src={process.env.PUBLIC_URL + '../images/check.png'} alt=""/>
            </div>
        </div>
      )
    }
    return (
      <div className="menuItem">
        <img src={this.props.image} onClick={this.props.click} alt=""/>
        <div className="menuName">
          {this.props.name}
        </div>
        <div className="menuPrice">
          {this.props.price}
        </div>
        {check}
      </div>  
      );
  }
}
 
export default Menu;