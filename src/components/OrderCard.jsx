import React from 'react';
import {Button, Card} from "react-bootstrap";

const OrderCard = () => {
    return (
        <Card className={"p-4"}>
            <h4>Sum Order</h4>
            <div>Price: <strong> 100000 </strong></div>
            <div>Delivery: </div><strong> 1000 </strong>
            <hr/>
            <div>Total Pay: <strong>100000</strong></div>
            <Button variant={"outline-danger"} className={"mt-4 mb-4"}>Buy</Button>
        </Card>
    );
};

export default OrderCard;