import React, { useState } from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Row,
  ListGroup,
  Col,
  Tab,
} from "react-bootstrap";

const NavigationBar = ({
  items,
  onCityHandler,
  onLatHandler,
  onLonHandler,
  onSelectCity,
}) => {
  const [cityValue, setCityValue] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  const handleInputChange = (e) => {
    setCityValue(e.target.value);
  };

  const handleCityChange = (e) => {
    e.preventDefault();
    onCityHandler(cityValue);
  };

  const handleSelectCityChange = (e) => {
    e.preventDefault();
    onLatHandler(lat);
    onLonHandler(lon);
    onSelectCity(selectedCity);
  };

  const handleChosenCity = (item) => {
    setSelectedCity(item.name);
    setSelectedState(item.state);
    setLat(item.lat);
    setLon(item.lon);
  };

  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Choose Place
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Form className="d-flex" onSubmit={handleCityChange}>
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={handleInputChange}
                />
                <Button variant="outline-success" onClick={handleCityChange}>
                  Search
                </Button>
              </Form>
              <Tab.Container
                id="list-group-tabs-example"
                defaultActiveKey="#link1"
              >
                <br />
                <Row>
                  <Col sm={12}>
                    <ListGroup>
                      {items.map((item) => (
                        <ListGroup.Item
                          action
                          key={Math.random()}
                          onClick={(e) => {
                            handleChosenCity(item);
                            handleSelectCityChange(e);
                          }}
                          value={item.name}
                        >
                          {item.name}  {item.state}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Col>
                </Row>
              </Tab.Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Navbar.Brand href="#">
            {selectedCity} {selectedState}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
