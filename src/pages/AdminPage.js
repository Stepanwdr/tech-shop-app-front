import React, {useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CreateTypeModal from "../components/Modals/CreateTypeModal";
import CreateBrandModal from "../components/Modals/CreateBrandModal";
import CreateDeviceModal from "../components/Modals/CreateDeviceModal";
const AdminPage = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [brandVisible, setBrandeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    return (
        <Container className={"d-flex flex-column"}>
            <h1>Admin Page</h1>
            <Button variant={"outline-dark mt-2 p-2"} onClick={() => setTypeVisible(true)}>Add Type</Button>
            <Button variant={"outline-dark mt-2 p-2"} onClick={() => setBrandeVisible(true)}>Add Brand</Button>
            <Button variant={"outline-dark mt-2 p-2"} onClick={() => setDeviceVisible(true)}>Add Device</Button>
            <CreateTypeModal show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateBrandModal show={brandVisible} onHide={()=>setBrandeVisible(false)}/>
            <CreateDeviceModal show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
        </Container>
    );
};

export default AdminPage;