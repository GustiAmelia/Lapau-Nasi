import React, { Component } from 'react';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {isCheckListOpen: false};
  }
  
  handleClickCheck(){
    this.setState({isCheckListOpen:true});
  }

  handleCloseCheck(){
    this.setState({isCheckListOpen:false})
  }

  render() { 

    let check;
    if(this.state.isCheckListOpen){
      check=(
        <div className="check" onClick={()=>{this.handleCloseCheck()}}>
            <div className="check-img">
              <img src={process.env.PUBLIC_URL + '../images/check.png'} alt=""/>
            </div>
        </div>
      )
    }

    return (  
        <div className="menuItem">
          <img src={this.props.image} alt=""onClick={()=>{this.handleClickCheck()}}/>
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
