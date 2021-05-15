import React from 'react';
import {Container, Row,Col} from "react-bootstrap"

const Body = () => {
    return (
        <Container as="div">
            <Row className="my-3">
                <Col >
                    <h2>What We Do</h2>
                    <hr/>
                    <p>We are a small business, but we deliver the most cost-effective and precise solutions for your enterprise.</p>
                    <p>Do you need a creative solution in Big Data, Machine Learning, Mobile and Desktop user
                        interface, AWS applications migration strategy for your enterprise?</p>
                    <p>Contact us now for free consultation.</p>
                </Col>
                <Col className="col-md-4 mb-5">
                    <h2>Contact Us</h2>
                    <hr/>
                        <address>
                            <abbr title="Phone">Phone: </abbr>(703) 371-3528
                            <br/>
                            <abbr title="Email">Email: </abbr><a href="mailto:#">contactus@ktl-consulting.com</a>
                        </address>
                </Col>
            </Row>
        </Container>
    )
};

export default Body;