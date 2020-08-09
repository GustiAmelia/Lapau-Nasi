import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../components/header';
import Menu from '../components/menu';
import LeftSideBar from '../components/leftSideBar';
import Cart from '../components/cart';
import { Container, Row, Col } from 'reactstrap';


const addNumInArr = (arr) => {
	let result = 0
	for (let i = 0; i<arr.length; i++) {
		result = arr[i] + result
	}
	return result
}

class Home extends Component {
    constructor(){
        super()
        this.state ={
            menus : [],
            choosedMenu: [],
            isCheckListOpen: false,
            allItemInCart: 0
        }
    }
   
  onClik = (index) => {
    const {menus} = this.state;
		const choosedMenu = [...this.state.choosedMenu];

		// cari data yang idnya sama dengan yang diklik
		let idDataDiKlik = menus[index].id;
		if (choosedMenu.length === 0) {
      choosedMenu.push(menus[index])
      choosedMenu[0].jumlah = 1
		} else {
			// currentmenus.push('hai')
			let id = choosedMenu.findIndex(item => item.id === idDataDiKlik);
			console.log(id)
			if (id === -1) {
        choosedMenu.push(menus[index]);
        choosedMenu[index].jumlah = 1
			} else {
				choosedMenu.splice(id, 1)
			}
			console.log(choosedMenu)
			
		}
    
    let allItemInCart = []
    for (let i in choosedMenu) {
      allItemInCart.push(choosedMenu[i].jumlah)
    }
    console.log(allItemInCart)

		this.setState({
      choosedMenu,
      allItemInCart: addNumInArr(allItemInCart)
		})
  }

   componentDidMount =()=>{
       const urlString = 'http://localhost:7000/product';
       Axios.get(urlString)
       .then((res)=>{
           this.setState({
               menus : res.data.results
           })
       }).catch((err)=>{
           console.log(err)
       })
   }
    render() { 
      return (
        <Container fluid={true}>
          <Row>
            <Col md="8" lg="8" xl="8">
              <Row>
                <Col  className="headerItem">
                  <Header/>
                </Col>
              </Row>
              <Row>
                <Col md="1" lg="1" xl="1">
                  <LeftSideBar/>
                </Col>
                <Col xs="12" sm="12" md="11" lg="11" xl="11" >
                  <div className="card-menu">
                    {this.state.menus.map((menuitem,index)=>{
                      return(
                        <Menu
                          image ={process.env.PUBLIC_URL +`./images/${menuitem.images}`}
                          name = {menuitem.menu}
                          price ={`RP.${menuitem.price}`}
                          clikMenu={() => this.onClik(index)}
                          isCheckListOpen={this.state.isCheckListOpen}
                        />
                      )
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4" lg="4" xl="4" className="cart-item">
              <Cart
                choosedMenu={this.state.choosedMenu}
                allItemInCart={this.state.al}
              />
            </Col>
          </Row>
        </Container>
          
         
          
          
      );
    }
}
 
export default Home;