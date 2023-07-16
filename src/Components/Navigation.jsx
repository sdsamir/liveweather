import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(props) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Form className="d-flex">
            <InputGroup className="mb-3">
                <InputGroup.Text>
                  <FontAwesomeIcon icon="fa-light fa-magnifying-glass" />
                </InputGroup.Text>
                <Form.Control aria-label="Amount (to the nearest dollar)" />
                <Button variant="outline-success">Search</Button>
            </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navigation;