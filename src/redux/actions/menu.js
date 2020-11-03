import {fetchAllMenu,addTransation} from '../../services/urlApi';

import * as actions from './actionTypes'

export const getAllMenus =(page,limit)=>{
  return{
    type : actions.fetchMenu,
    payload :fetchAllMenu(page,limit),
  };
};

export const itemToCart = (id,image, product_name, price ) => {
  return {
      type: actions.addMenuToCart,
      payload: {
          id,
          image,
          quantity: 1,
          product_name,
          price,
      }
  };
};

export const incrementCreator = (id)=>{
  return {
    type : actions.increase,
    payload:{
      id
    }
    
  };
};

export const decrementCreator = (id)=>{
  return {
    type : actions.decrease,
    payload:{
      id
    }
  };
};

export const removeCartCreator =()=>{
  return{
    type : actions.removeItemCart
  }
}

export const addTransactionCreator =(data)=>{
  return{
    type : actions.addNewTransaction,
    payload : addTransation(data)
  }
}





