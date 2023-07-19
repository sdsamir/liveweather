import Clock from "react-live-clock"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


import Sunny from "../../Assets/Images/Sunny.jpg";
import Rainny from "../../Assets/Images/Rainy.jpg";
import Clowdy from "../../Assets/Images/Clowdy.jpg";
import ThunserStorm from "../../Assets/Images/Thunderstorm.jpg";
import Snow from "../../Assets/Images/Snow.jpg";
import Windy from "../../Assets/Images/Windy.jpg";
import Fog from "../../Assets/Images/Fog.jpg";

import Card from 'react-bootstrap/Card';

const WeatherDetails = (props) => {
  const weatherImage = selectWeatherImage(props.selectedLocation.weather);
  return (
    Object.keys(props.selectedLocation).length !== 0 ?
      <Container>
        <Row>
          <Col>
            <Card className="bg-dark text-white mt-2">
              <Card.Header>
                <h3>{props.selectedLocation.name}, {props.selectedLocation.countryCode}</h3>
                <h6>
                  {props.selectedLocation.longitude} / {props.selectedLocation.lattitude}
                </h6>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <h5>Temperature : {props.selectedLocation.temp} &deg;C | {props.selectedLocation.weather}</h5>
                    <hr />
                    <h5>Humidity : {props.selectedLocation.humidity}%</h5>
                  </Col>
                  <Col>
                    <h5>Feels Like : {props.selectedLocation.feelsLike} &deg;C</h5>
                    <hr />
                    <h5>Wind Speed : {props.selectedLocation.windSpeed} Km/H</h5>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Img variant="bottom" src={weatherImage} width={180} height={680} />
              <Card.Footer>
                <h3><Clock format="dddd, MMMM Do YYYY, HH:mm:ss" interval={1000} ticking={true} /></h3>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      :
      <Container>
        <Row>
          <Col>
            <Alert className='bg-dark text-white mt-2'>
              <Alert.Heading>Please search your city above !!</Alert.Heading>
            </Alert>
          </Col>
        </Row>
      </Container>
  )
}
const selectWeatherImage = (weather) => {

  if (weather === "Haze") return Fog;
  else if (weather === "Clouds") return Clowdy;
  else if (weather === "Rain") return ThunserStorm
  else if (weather === "Snow") return Snow;
  else if (weather === "Dust") return Fog;
  else if (weather === "Drizzle") return Rainny;
  else if (weather === "Fog") return Fog;
  else if (weather === "Smoke") return Fog;
  else if (weather === "Mist") return Fog;
  else if (weather === "Tornado") return Windy;
  else return Sunny;
};

export default WeatherDetails;
