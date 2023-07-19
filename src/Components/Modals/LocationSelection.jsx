import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LocationSelection = (props) => {

    const onLocationSelectionChange = (item) => {
        props.handleLocationSelectionChange(item);
        props.handleLocationModalShowStateChange(false);
    };

    const onLocationModalShowStateChange = (state) => {
        props.handleLocationModalShowStateChange(state);
    };

    const buildListItem = (item) => {
        return (
            <ListGroup.Item as="li" key={item.id}
                className="d-flex justify-content-between align-items-start mt-2"
                action onClick={() => onLocationSelectionChange(item)} variant="success">
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
            <Modal size="lg"
                show={props.locationModalShowState}
                onHide={() => onLocationModalShowStateChange(false)}
                backdrop="static"
                keyboard={false} >
                <Modal.Header closeButton className="bg-secondary">
                    <Modal.Title className='text-white'>{props.searchString.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body data-bs-theme="dark" className="bg-secondary">
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
                <Modal.Footer className="bg-secondary">
                    <Button variant="dark" onClick={() => onLocationModalShowStateChange(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LocationSelection;