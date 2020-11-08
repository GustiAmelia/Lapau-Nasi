import {fetchAllMenu,addTransation,fetchAllCategory,addNewProduct,deleteProduct} from '../../services/urlApi';

import * as actions from './actionTypes'

export const getAllMenus =(page)=>{
  return{
    type : actions.fetchMenu,
    payload :fetchAllMenu(page),
  };
};

export const itemToCart = (menu ) => {
  return {
      type: actions.addMenuToCart,
      payload: {
          id : menu.id,
          image : menu.image,
          quantity: 1,
          product_name : menu.product_name,
          price : menu.price,
          
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

export const deleteItemCartCreator =(id)=>{
  return {
    type: actions.deleteItemCart,
    payload:{id}
  }
}

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

export const getCategory = ()=>{
  return {
    type : actions.fetchCategory,
    payload:fetchAllCategory(),
  }
}

export const addProductCreator =(data)=>{
  return {
    type:actions.addProduct,
    payload:addNewProduct(data),
  }
}

export const deleteProductCreator = (id)=>{
  return {
    type:actions.deletProduct,
    payload:deleteProduct(id)
  }
}







