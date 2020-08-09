import React, { Component } from 'react';
import Counter from './counter-cart';

class Cart extends Component {
    
    constructor() {
        super();
        this.state = {
            count: 0

        }
    }

    setItemInCart = (count) => {
        this.setState({count})
    }

    render() {
        const {choosedMenu} = this.props;
        console.log(choosedMenu)
        return ( 
            <div>
               
                <div className="cart-header">
                     <h5>Cart <span className="zero">{this.state.count}</span></h5>
                </div>
                {
                    choosedMenu.length ? choosedMenu.map(item => {
                        return (
                            <>
                                <p>{item.price}</p>
                                <p>{item.menu}</p>
                                <Counter jumlah={item.jumlah} allItem={choosedMenu.length} setItemInCart={this.setItemInCart}/>
                                </>
                            )
                        }) : <div className="noCart">
                        <img src={process.env.PUBLIC_URL + './images/food-and-restaurant.png'} alt=""/>
                        <h5>Your cart is empty</h5>
                        <p>Please add some items from the menu</p>
                    </div>
                    }
                    
                </div>
            
            );
        }
    }
    
    export default Cart;