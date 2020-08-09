import React, { Component } from 'react';

class Menu extends Component {

  render() { 

    let check;
    if(this.props.isCheckListOpen){
      check=(
        <div className="check" onClick={this.props.clikMenu}>
            <div className="check-img">
              <img src={process.env.PUBLIC_URL + '../images/check.png'} alt=""/>
            </div>
        </div>
      )
    }
    
    return (  
        <div className="menuItem">
          <img src={this.props.image} alt=""onClick={this.props.clikMenu}/>
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
