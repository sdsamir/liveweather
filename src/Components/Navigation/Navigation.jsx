import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Navbar from 'react-bootstrap/Navbar';

import secrets from "../../secrets.json";
import getLocations from '../../Utils/getLocations';
import LocationSelection from "../Modals/LocationSelection"


const Navigation = (props) => {

  const [locationList, setLocationList] = useState([]);
  const [locationModalShowState, setLocationModalShowState] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");

  const onSearchFormSubmit = async (event) => {
    event.preventDefault();
    const locationResponse = await getLocations(event.target[0].value);

    setLocationList(toLocationList(locationResponse));
    setSearchLocation(event.target[0].value);
    setLocationModalShowState(true);    
  };

  const onLocationSelectionChange = (item)=>{    
    props.handleLocationSelectionChange(item);
  };

const onLocationModalShowStateChange = (state) => {
  setLocationModalShowState(state);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="col-2"><h2>{secrets.ApplicationSettings.brandName}</h2></Navbar.Brand>
        <Form className="d-flex col-9" onSubmit={onSearchFormSubmit}>
          <InputGroup className="mb-6">
            <InputGroup.Text>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" beatFade />
            </InputGroup.Text>
            <Form.Control placeholder="Search your place" />
            <Button variant="outline-success" type="button">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" flip />
            </Button>
          </InputGroup>
        </Form>
        <LocationSelection 
          locationModalShowState={locationModalShowState} 
          handleLocationModalShowStateChange={onLocationModalShowStateChange} 
          locationList={locationList} 
          handleLocationSelectionChange = {onLocationSelectionChange}
          searchString={searchLocation} />
      </Container>
    </Navbar>
  );
}

const toLocationList = (locationResponse) => {
  let locationList = [];
  if (locationResponse === null || locationResponse.cod !== "200") {
    return [];
  }

  locationResponse.list.forEach((item) => {
    locationList.push({
      id: item.id,
      name: item.name,
      lattitude: item.coord.lat,
      longitude: item.coord.lon,
      countryCode: item.sys.country,
      temp: (item.main.temp - 273.15).toFixed(2),
      feelsLike: (item.main.feels_like - 273.15).toFixed(2),
      maxTemp: (item.main.temp_max - 273.15).toFixed(2),
      minTemp: (item.main.temp_min - 273.15).toFixed(2),
      humidity: item.main.humidity,
      weather: item.weather[0].main,
      windSpeed: item.wind.speed,
    });
  });
  return locationList;
};

export default Navigation;