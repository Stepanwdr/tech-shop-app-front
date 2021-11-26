import React, {useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getTypes} from "../../store/actions/types";
import {getBrands} from "../../store/actions/brands";
import _ from "lodash"
const CreateDeviceModal = ({show,onHide}) => {
    const dispatch=useDispatch()
    const {allTypes}=useSelector(store=>store.types)
    const {allBrands}=useSelector(store=>store.brands)
    const [info,setInfo]=useState([])
    const [formData,setFormData]=useState([])
    const addInfo=()=>{
        setInfo([...info,{title:'',description:'',number:Date.now()}])
    }
    const deleteInfo=(id)=>{
        setInfo(info.filter(i=>i.number!==id))
        console.log(info,id)
    }
    const onSubmit=()=>{
        console.log(
            formData,info
        )
    }
    useEffect(()=>{
        dispatch(getTypes())
        dispatch(getBrands())
    },[])
    const{name,brand,price,type,title,description}=formData
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {type ? type: "Select Type"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {allTypes?.map(type=>
                                <Dropdown.Item key={type.id} onClick={()=>setFormData(_.set([...formData],"type",type.name))}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={" mt-3"}>
                        <Dropdown.Toggle>
                            {brand ? brand: "Select Brand"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {allBrands?.map(brand=>
                                <Dropdown.Item key={brand.id} onClick={()=>setFormData(_.set([...formData],"brand",brand.name))}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Input Device Name"}
                        value={name}
                        onChange={(ev)=>setFormData(_.set([...formData],"name",ev.target.value))}
                        type={"text"}
                    />
                    <hr/>
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Input Device Price"}
                        onChange={(ev)=>setFormData(_.set([...formData],"price",ev.target.value))}
                        type={"number"}
                        value={price}
                    />
                    <hr/>
                    <Form.Control
                        className={"mt-3"}
                        type={"file"}
                    />
                    <Button variant={"outline-dark"} className={"mt-3 mb-3"} onClick={addInfo}>Add New Device</Button>
                    {info?.map(i=>(
                        <Row key={ i.number} className={"d-flex justify-content-between mt-3 mb-3"}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder={"Input Speciality Name"}
                                    value={title}
                                    onChange={(ev)=>setFormData(_.set([...formData],"specialTitle",ev.target.value))}
                                />
                            </Col>
                            <Col md={4} >
                                <Form.Control
                                    placeholder={"Input Speciality Description"}
                                    value={description}
                                    onChange={(ev)=>setFormData(_.set([...formData],"specialDescription",ev.target.value))}
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant={"outline-danger"} onClick={()=>deleteInfo(i.number)}>Delete</Button>
                            </Col>
                        </Row>

                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"}  onClick={()=>onSubmit()}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDeviceModal;