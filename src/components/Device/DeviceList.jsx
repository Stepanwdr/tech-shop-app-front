import React, {useEffect} from 'react';
import DeviceItem from "./DeviceItem";
import {useDispatch, useSelector} from "react-redux";
import {getDevice} from "../../store/actions/devices";
import {Row} from "react-bootstrap";
import _ from "lodash"
import {getBrands} from "../../store/actions/brands";

const DeviceList = () => {
    const dispatch=useDispatch()
    const {allDevice,selectedDevice}=useSelector(store=>store.device)
    // const {allBrands,selectedBrands}=useSelector(store=>store.brands)
    useEffect(()=>{
        dispatch(getDevice())
        // dispatch(getBrands())
    },[])
    return (
        <Row className={"d-flex mt-20"}>
            {_.map(allDevice,(device)=><DeviceItem key={device.id} device={device}/>)}
        </Row>
    );
};

export default DeviceList;