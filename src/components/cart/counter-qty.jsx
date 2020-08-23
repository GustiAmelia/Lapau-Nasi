import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state={
        count:0,
        
    }
}

handleClickPositive(){
    this.setState({count:this.state.count +1}); 
}

handleClickNegative(){
  if(this.state.count>0){
    this.setState({count:this.state.count-1});
  }
}
  render() { 
    return (
      <ButtonGroup>
        <Button onClick={()=>{this.handleClickNegative()}}>-</Button>
        <Button><h6>{this.state.count}</h6></Button>
        <Button onClick={()=>{this.handleClickPositive()}}>+</Button>
      </ButtonGroup>
    );
  }
}
 
export default Counter;