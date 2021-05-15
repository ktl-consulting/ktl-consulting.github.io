import React from 'react';
import products from '../products'
import {Col, Row, Container} from "react-bootstrap"
import Product from "../components/Product"
import Body from "../components/Body"

const HomeScreen = () => {
    return (
        <Container>
            <Body />
            <h2>Product show cases</h2>
            <hr/>
            
             <Row>
                 {products.map(product => (
                     <Col key={product._id} sm={12} md={6} lg={12} xl={3} >
                         <Product product={product} />
                     </Col>
                 ))}
             </Row>
        </Container>
    );
};

export default HomeScreen;