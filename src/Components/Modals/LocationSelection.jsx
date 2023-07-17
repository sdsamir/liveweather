
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LocationSelection = (props) => {   

    const alertClicked = (event)=>{
        console.log(event);
    };

    const buildListItem = (item) => {
        return (
            <ListGroup.Item as="li" key={item.id}
                className="d-flex justify-content-between align-items-start mt-2"
                action onClick={alertClicked} variant="success">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{item.name} [{item.countryCode}]</div>
                    {item.longitude}/{item.lattitude}
                </div>
                <Stack direction="horizontal" gap={2}>
                    <Badge bg="success">{item.minTemp} <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-down" /></Badge>
                    <Badge bg="danger">{item.maxTemp} <FontAwesomeIcon icon="fa-solid fa-temperature-arrow-up" /></Badge>
                </Stack>
            </ListGroup.Item>
        );
    }

    return (
        <>
            <Modal
                show={props.showLocationModal}
                onHide={() => props.handleLocationModalState(false)}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.searchString}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        props.locationList.length === 0 ?
                            <Alert variant="danger">
                                <Alert.Heading>No location found !!</Alert.Heading>                                
                            </Alert>
                            :
                            <ListGroup as="ol" numbered>
                                {
                                    props.locationList.map((item, i) => (buildListItem(item)))
                                }
                            </ListGroup>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.handleLocationModalState(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LocationSelection;