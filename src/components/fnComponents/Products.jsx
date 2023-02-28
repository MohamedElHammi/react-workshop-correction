import React, { useEffect, useState } from "react";
import Product from "./Product";
import PRODUCTS from '../../data/products.json';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

export default function Products() {
    const [isBuy, setIsBuy] = useState(false);
    const [isWelcome, setIsWelcome] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setIsWelcome(false);
        }, 3000);
        return () => {
            console.log("Destroyed...");
        }
    },[]);

    const handleBuy = () => {
        setIsBuy(true);
        setTimeout(() => {
            setIsBuy(false);
        }, 2000);
    }

    const ProductCards = PRODUCTS.map((product, index) => (
        <Product
            key={index}
            img={product.img}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            handleBuy={handleBuy}
        />
    ));

    return (
        <div>
            {
                isWelcome && (
                    <Alert style={{ width: '70%', marginBottom: 40 }} variant='success'>
                        Hey welcome to the Shop
                    </Alert>
                )
            }
            <Row xs={1} md={4} className="g-4">
                {ProductCards}
            </Row>
            {
                isBuy && (
                    <Alert style={{ width: '70%', marginTop: 20 }} variant='primary'>
                        You bought an Item
                    </Alert>
                )
            }
        </div>
    )
}