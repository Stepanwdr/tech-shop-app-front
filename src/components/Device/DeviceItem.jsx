import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../../utils/consts";
import star from "../../assets/icons/star.png"
const DeviceItem = ({device}) => {
    const history=useHistory()
    return (
        <Col md={3} onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)} className={"device-item"}>
<Card style={{width:150 ,cursor:"pointer",border:"lightblue"}}>
<Image width={"150"} height={"150"} src={process.env.REACT_APP_API_URL + device.img}/>
  <div className='d-flex justify-content-between align-items-center'>
          <div className={"device-item__brand"}>
              Samsung...
          </div>
          <div className={"device-item__rating"}>
              {device.rating}
              <Image src={star} width={15} height={15} />
          </div>
      </div>
      <div className={'device-item__name'}>
          {device.name}
      </div>

</Card>
        </Col>
    );
};

export default DeviceItem;