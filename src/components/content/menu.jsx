import React from 'react';

const Menu =({menu,click})=>{
    // let check;
    // if(this.props.isCheckListOpen){
    //   check=(
    //     <div className="check">
    //         <div className="check-img">
    //           <img src={process.env.PUBLIC_URL + '../images/check.png'} alt=""/>
    //         </div>
    //     </div>
    //   )
    // }
    return (
      <div className="menuItem">
        <img src={menu.images} onClick={()=>click(menu.id,menu.images,menu.menu,menu.price)} alt=""/>
        <div className="menuName">
          {menu.menu}
        </div>
        <div className="menuPrice">
          {menu.price}
        </div>
        {/* {check} */}
      </div>  
      );
  
}
 
export default Menu;