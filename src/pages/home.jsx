import React, { Component } from 'react';
import Content from '../components/content/content';
import Cart from '../components/cart/cart';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

const addNumInArr = (arr) => {
	let result = 0
	for (let i = 0; i<arr.length; i++) {
		result = arr[i] + result
	}
	return result
}

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      menus:[],
      choosedMenu:[],
      isCheckListOpen:false
    }
  }

  handleOnClick=(index)=>{
    const {menus} = this.state;
		const choosedMenu = [...this.state.choosedMenu];

		// cari data yang idnya sama dengan yang diklik
		let idDataDiKlik = menus[index].id;
		if (choosedMenu.length === 0) {
      choosedMenu.push(menus[index])
      // choosedMenu[0].jumlah = 1
		} else {
			// currentmenus.push('hai')
			let id = choosedMenu.findIndex(item => item.id === idDataDiKlik);
			console.log(id)
			if (id === -1) {
        choosedMenu.push(menus[index]);
        // choosedMenu[index].jumlah = 1
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

    // this.handlerAddCart()
    // this.handlerChecklist()
  }

  handlerAddCart=()=>{
    console.log("hai")
  }
  handlerChecklist(){
    this.setState({isCheckListOpen:true})
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
      console.log(this.state.choosedMenu)
      return (
        <Container fluid={true}>
          <Row>
            <Col md="8" lg="8" xl="8">
              <Content 
              menus={this.state.menus}
              click={this.handleOnClick}
              isCheckListOpen={this.state.isCheckListOpen}/>
            </Col>
            <Col md="4" lg="4" xl="4" className="cart-item">
              <Cart
              choosedMenu={this.state.choosedMenu}
              />
            </Col>
          </Row>
        </Container>  
      );
    }
}
 
export default Home;