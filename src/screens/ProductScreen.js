import React from 'react';
import { Link} from "react-router-dom"
import { Row, Col, Image, Container } from 'react-bootstrap'
import products from '../products'

const ProductScreen = ( { match }) => {
    const product = products.find((p) => p._id === match.params.id)

    return (<Container>
                <Link className="btn btn-light my-3" to="/">
                    The products are under development.
                </Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} />
                    </Col>
                </Row>
            </Container>)

};

export default ProductScreen;