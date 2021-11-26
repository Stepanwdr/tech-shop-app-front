import React from 'react';
import MyBasket from "../components/Basket/MyBasket";
import {Col, Container, Row} from "react-bootstrap";
import OrderCard from "../components/OrderCard";


const BasketPage = () => {
    return (
        <Container>
            <Row className={"d-flex mt-3"}>
                <Col md={9}>
                    <MyBasket/>
                </Col>
                <Col md={3}>
                    <OrderCard/>
                </Col>
            </Row>


        </Container>
    );
};

export default BasketPage;