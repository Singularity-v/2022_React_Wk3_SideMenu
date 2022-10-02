import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import HamMenu from "../components/HamMenu";
import NavBar from "../components/NavBar";
import React, { useState } from 'react';

export default function ProductList({products}) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    console.log(setIsOnTouch);

    return (
        <Row gutter={[32, 32]}>
        {products.map(product => (
            <Col 
            key={product.id} 
            sm={{ span: 14 }} 
            lg={{ span: 10 }}
            xl={{ span: 8 }}
            xxl={{ span: 6 }}
            >
            <ProductItem product={product}/>
            </Col>
        ))}
        </Row>
    );
}