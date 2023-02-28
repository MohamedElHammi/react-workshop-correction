import React, { Component } from 'react';
import Product from './Product';
import PRODUCTS from '../data/products.json';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = { productQuantity: this.props.quantity, isBuy: false, isWelcome: true };
        // this.handleBuy = this.handleBuy.bind(this);
        console.log('I am the constructor !');
    }

    /* static getDerivedStateFromProps(props, state) {
        console.log('I am the getDerivedStateFromProps method !');
        return null;
    } */
    
    componentDidMount() {
        console.log('I am the componentDidMount method !');
        setTimeout(()=>{
            this.setState(prevState => ({
                ...prevState,
                isWelcome: false
            }));
        }, 3000);
    }

    handleBuy = () => {
        this.setState((prevState) => ({
            ...prevState,
            isBuy: true
        }));
        setTimeout(() => {
            this.setState((prevState) => ({
                ...prevState,
                isBuy: false
            }));
        }, 2000);
    }

    render() {
        console.log('I am the render method !');
        const ProductCards = PRODUCTS.map((product, index) => (
            <Product
                key={index}
                img={product.img}
                name={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                handleBuy={this.handleBuy}
            />
        ))
        return (
            <div>
                {
                    this.state.isWelcome && (
                        <Alert style={{ width: '70%', marginBottom: 40 }} variant='success'>
                            Hey welcome to the Shop
                        </Alert>
                    )
                }
                <Row xs={1} md={4} className="g-4">
                    {ProductCards}
                </Row>
                {
                    this.state.isBuy && (
                        <Alert style={{ width: '70%', marginTop: 20 }} variant='primary'>
                            You bought an Item
                        </Alert>
                    )
                }
            </div>
        )
    }
}
