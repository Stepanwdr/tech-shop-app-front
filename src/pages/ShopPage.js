import React from 'react';
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/Device/DeviceList";


const ShopPage = () => {
    return (
        <Container>
            <Row className={"mt-2"}>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default ShopPage;