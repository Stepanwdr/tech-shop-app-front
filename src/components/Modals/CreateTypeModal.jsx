import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateTypeModal = ({show,onHide}) => {
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
                    Create Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                  <Form.Control
                  placeholder={"Input Type Name"}
                  />
              </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                <Button variant={"outline-success"} onClick={""}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTypeModal;