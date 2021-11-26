import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingleDevice} from "../store/actions/devices";
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from "../assets/icons/big_star.png"
const DevicePage = () => {
    const {id}=useParams()
    const devInfo=[
        {title:'OZU',description:"128GB"},
        {title:'Camera',description:"64mpx"},
        {title:'Processor',description:"ios"}
    ]
    const { singleDevice,info}=useSelector(store=>store.device)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingleDevice(id))
    },[]
)
    return (
        <Container className={"mt-3 d-flex justify-content-between flex-column device-page"}>
<Row>
    <Col md={3}>
        <Image src={process.env.REACT_APP_API_URL + singleDevice?.img} className={"device-page__img"}/>
    </Col>
    <Col md={3}>
        <Row>
            <h2>{singleDevice?.name}</h2>
            <div className={"device-page__rating"}>
                <Image src={bigStar} className={"device-page__rating-start"}/>
                <div className={"device-page__rating-number"}>
                    {singleDevice?.rating}
                </div>
            </div>
        </Row>
    </Col>
    <Col md={3}>
        <Card  className={"d-flex flex-column justify-content-around p-3"}>
            <h3> since {singleDevice?.price} AMD</h3>
            <Button variant={"outline-primary"}>Add Basket</Button>
        </Card>
    </Col>
</Row>
            <Row>
                <h3>Specifications:</h3>
                {devInfo?.map(info=>
                    <div key={info.id}  className={"device-page__special"}>
                        {info.title} : <strong>{info.description}</strong>
                    </div>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;