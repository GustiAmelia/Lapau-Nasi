import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';



const Counter=({item,increase,decrease})=>{
  return (
    <ButtonGroup>
      <Button onClick={()=>decrease(item.id)}>-</Button>
      <Button><h6>{item.quantity}</h6></Button>
      <Button onClick={()=>increase(item.id)}>+</Button>
    </ButtonGroup>
  );
}
 
export default Counter;