import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "../components/Card";
import MainNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Passenger = () => {
  const [data, setData] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function handleShowFlights() {
    const url = `https://aegis-backend-assignment.onrender.com/passenger/getFlight`;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: source,
        destination: destination,
        date: date,
        time: time,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    setMainData([]);
    if (data.length !== 0) {
      console.log(data[0].fligts);
      setMainData(
        Object.keys(data[0].fligts).map((key) => ({
          [key]: data[0].fligts[key],
        }))
      );
    }
  }, [data]);

  return (
    <>
      <MainNavbar />
      <div className="passengerContainer">
        <div className="passengerContainer_one">
          <div className="topPassengetPart">
            <h1>Check Flights</h1>
            <Form>
              <Row>
                <Col>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Source</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Source"
                      value={source}
                      onChange={(e) => setSource(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Destination"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </Form.Group>
                </Col>

                <Col xs="auto">
                  <Button className="mb-2" onClick={handleShowFlights}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="passengerContainer_two">
          <h1>All Flights</h1>
          <div className="cards">
            {mainData.length !== 0 ? (
              mainData.map((obj, index) => {
                const keyName = Object.keys(obj)[0];
                const value = obj[keyName];
                return <Card key={index} keyName={keyName} value={value} />;
              })
            ) : (
              <div>
                <h4>Flights Not Found</h4>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Passenger;
