import React from 'react';
import fork from '../../images/fork.png';
import clipboard from '../../images/clipboard.png';
import add from '../../images/add.png';
import ModalAddProduct from '../modal/modalAddProduct';
import { useState } from 'react';


const LeftSideBar=(props)=> {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    return (  
      <div className='leftSideBar'>
        <img src={fork} alt=""/>
        <img src={clipboard} alt=""/>
        <img src={add} onClick={handleShowModal}alt=""/>
        <ModalAddProduct
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                fetchAllProducts={props.fetchAllProducts}
            />
      </div>
    );
  
}
 
export default LeftSideBar;