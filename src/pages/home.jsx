import React, { Component } from 'react';
import Content from '../components/content/content';
import Cart from '../components/cart/cart';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      menus:[],
      choosedMenu:[],
      isCheckListOpen:false,
      totalCart:0
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
      console.log(choosedMenu.length)

		}

		this.setState({
      choosedMenu,
      totalCart:choosedMenu.length
      // allItemInCart: addNumInArr(allItemInCart)
		})
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
              totalCart={this.state.totalCart}
              click={this.handleOnClick}
              choosedMenu={this.state.choosedMenu}
              />
            </Col>
          </Row>
        </Container>  
      );
    }
}
 
export default Home;