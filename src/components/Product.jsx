import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {likeCounter: 0, productQuantity: this.props.quantity};
        // this.handleLike = this.handleLike.bind(this);
        // this.handleBuyProduct = this.handleBuyProduct.bind(this);
    }

    handleLike = () => {
        this.setState((prevState)=>({
            likeCounter: prevState.likeCounter + 1
        }));
    }

    decrementProductQuantity = (quantity) => {
        if(quantity > 0) {
            this.setState((prevState)=>({
                ...prevState,
                productQuantity: prevState.productQuantity - 1
            }));
        }
    }

    handleBuyProduct = () => {
        this.props.handleBuy();
        this.decrementProductQuantity(this.state.productQuantity);
    }

    render() {
        return (
            <Col style={{ width: "20%" }} className="m-2">
                <Card>
                    <Card.Img variant="top" style={{ height: 400 }} src={require(`../assets/images/${this.props.img}`)} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            Price : {this.props.price}
                        </Card.Text>
                        <Card.Text>
                            Quantity : {this.state.productQuantity}
                        </Card.Text>
                        <Card.Text>
                            Like : {this.state.likeCounter}
                        </Card.Text>
                        <Button variant="info" onClick={this.handleLike} className="mx-5">Like</Button>
                        <Button variant="primary" onClick={this.handleBuyProduct} disabled={this.state.productQuantity ? false : true} className="mx-5">Buy</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
