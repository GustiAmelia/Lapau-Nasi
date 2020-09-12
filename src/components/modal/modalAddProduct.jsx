import React, { Component } from 'react';
import { Modal, Row, Col, Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';

class ModalAddProduct extends Component {
    state = {
        name: '',
        price: '',
        category: '',
        image: '',
        allCategory: [],
    };


    fetchCategory = () => {
        const url = `${process.env.REACT_APP_API_URL}/category`;
        Axios.get(url)
            .then((res) => {
                this.setState({
                    allCategory:res.data.results
                })
            })
            .catch(err => console.log(err))
    };

    componentDidMount = () => {
        this.fetchCategory();
    }

    insertProduct = () => {
        let formData = new FormData();
        formData.append("product_name", this.state.name);
        formData.append("price", this.state.price);
        formData.append("id_category", this.state.category);
        formData.append("img_product", this.state.image);

        const configHeader = {
            headers: {
                "content-type": "multipart/form-data",
                // "x-access-token":
                // "Bearer toke",
            }
        };

        const URLString = `${process.env.REACT_APP_API_URL}/product`;
        console.log(formData.get('price'));
        this.setState({
            name: '',
            price: '',
            category: '',
            image: '',
        })
        this.props.handleCloseModal();

        Axios.post(URLString, formData, configHeader)
            .then((res) => {
                console.log(res);
                this.props.handleCloseModal();
                
            })
            .catch(err => console.log(err))
    };

    render() {
        console.log(this.state)
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal} centered>
                <Modal.Body>
                    <Row>
                        <Col><h5>Add Item</h5></Col>
                    </Row>
                    <Form>
                        <Container>
                            <Form.Group as={Row} controlId="formPlaintextName">
                                <Form.Label column sm="2">
                                    <h6>Name</h6>
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control
                                        required
                                        type="text"
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ name: event.target.value })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextImage">
                                <Form.Label column sm="2">
                                    <h6>Image</h6>
                                </Form.Label>
                                <Col sm="10">
                            
                                    <Form.File
                                        id="image"
                                        onChange={(event) => {
                                            this.setState({ image: event.target.files[0] })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextPrice">
                                <Form.Label column sm="2">
                                    <h6>Price</h6>
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control
                                        type="number"
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ price: event.target.value })
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextCategory">
                                <Form.Label column sm="2">
                                    <h6>Category</h6>
                                </Form.Label>
                                <Col sm="6">
                                    <Form.Control
                                        as="select"
                                        defaultValue=""
                                        className="shadow-sm"
                                        onChange={(event) => {
                                            this.setState({ category: event.target.value })
                                        }}
                                    >
                                        <option value="" disabled hidden>Category</option>
                                        {this.state.allCategory.map((item) => {

                                            return (
                                                <option key={item.id} value={item.id}>{item.category_name}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Container>
                    </Form>
                    <Row className="mt-sm-5">
                        <Col className="text-right">
                            <Button variant="danger" className="mx-3 px-3" onClick={() => this.props.handleCloseModal()}>Cancel</Button>
                            <Button variant="info" className="px-4" onClick={() => {
                                this.insertProduct();
                            }}>Add</Button>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        );
    }
}

export default ModalAddProduct;