import React from 'react';
import {Button, Col, Image, Row} from "react-bootstrap";
import deviceImg from "../assets/images/deviceImg.jpg";
import {BASKET_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const MiniCart = (props) => {
    const history=useHistory()
    const items=[
        {
            id:1,
            name: "iPhone 12 Max Pro",
            price:1000000,
        },
        {
            id:2,
            name: "iPhone 13 Max Pro",
            price:1000000,
        },

    ]
   return (
       <Row className={"mini-cart d-flex"}>
           {items.map(item=>(
               <Row key={item.id} className={"mb-2 d-flex justify-content-between align-items-center"}>
               <hr/>
               <Col md={2}>
                   <Image src={deviceImg} alt="item" width={50} height={50}
                          cl3assName={"mini-cart__img device__image rounded-2"}
                   />
               </Col>
               <Col md={6}>
                   <div className="mini-cart__name"><strong>{item.name}</strong></div>
                   <div className="mini-cart__rating"><strong>{item.price}</strong></div>
               </Col>
               <Col md={3}>
                   <Button variant={"outline-danger"}>X</Button>
               </Col>
           </Row>
       ))}
           <hr/>
           <Col className={"d-flex justify-content-between mb-2"}><strong>Total</strong> 1250000 </Col>
           <hr/>
           <Button variant={"outline-dark"} className={"mini-cart__btn"}
                   onClick={() => history.push(BASKET_ROUTE)}>Order
           </Button>
       </Row>
    );
}


export default MiniCart;