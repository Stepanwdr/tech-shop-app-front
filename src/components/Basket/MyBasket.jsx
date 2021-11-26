import React from 'react';
import {Button,  Col, Form, Image, Row} from "react-bootstrap";
import deviceImg from "../../assets/images/deviceImg.jpg"
const MyBasket = () => {
    const basket = [{
        id:1,
        rating:5,
        name: "iPhone 12 Max Pro",
        brand:"I Phone",
        category:'Smartphone',
        price:100000,
        info:{title:"Ozu",description:"128GB"}
    },
        {
            id:2,
            rating: 5,
            name: "iPhone 13 Max Pro",
            brand: "I Phone",
            category: 'Smartphone',
            price: 1500000,
            info: {title: "Ozu", description: "128GB"}
        }
    ]
    const handleChange=(id)=>{
        console.log(id)
    }
    return (
            <Form>
                {basket.map(basket=>(
                    <Row key={basket.id} className={"basket__device d-flex align-items-center mb-3"}>
                        <Col md={1}>
                            <Form.Check type={"checkbox"} onChange={()=>handleChange(basket.id)}/>
                        </Col>
                        <Col md={3}>
                            <Image src={deviceImg} alt="item"  className={"device__image rounded-2"}/>
                        </Col>
                        <Col md={3} className={"ml-2"}>
                            <div className="basket__device-rating">Rating:<strong>{basket.rating}</strong></div>
                            <div className="basket__device-name">Brand:<strong>{basket.brand}</strong></div>
                            <div className="basket__device-name">Device:<strong>{basket.name}</strong></div>
                            <div className="basket__device-category">Category:<strong>{basket.category}</strong></div>
                            <div className="basket__device-info">{basket.info.title}:<strong>{basket.info.description}</strong></div>
                            <div className="basket__device-rating">Price:<strong>{basket.price}</strong></div>
                        </Col>
                        <Col md={3}>
                            <Button variant={"outline-warning ml-2"}>-</Button>
                            <span className={"basket__item-count ml-2"}>1 pcs</span>
                            <Button variant={"outline-warning ml-2"}>+</Button>
                            <Button variant={"outline-danger ml-2"}>X</Button>
                        </Col>
                    </Row>
                ))}
            </Form>
    );
};

export default MyBasket;