import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [indigo, setIndigo] = useState("");
  const [airasia, setAirasia] = useState("");
  const [vistara, setVistara] = useState("");

  function handleSubmitFlight() {
    const url = `https://aegis-backend-assignment.onrender.com/admin/addOneFlight`;
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
        fligts: { indigo: indigo, airasia: airasia, vistara: vistara },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));

    setSource("");
    setDestination("");
    setDate("");
    setTime("");
    setIndigo("");
    setAirasia("");
    setVistara("");
  }

  return (
    <>
      <div className="adminContainer">
        <h1 className="adminHeading">Admin</h1>
        <div className="adminContainer_one">
          <div className="topAdminContainer">
            <h1>Add Flights</h1>
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

                <span className="arrowIcon">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                </span>

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
              </Row>

              <Row>
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
              </Row>

              <Row>
                <h3>Flights</h3>
                <Col>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Indigo
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Ticket Price"
                        value={indigo}
                        onChange={(e) => setIndigo(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Airasia
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Ticket Price"
                        value={airasia}
                        onChange={(e) => setAirasia(e.target.value)}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail"
                  >
                    <Form.Label column sm={2}>
                      Vistara
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        type="number"
                        placeholder="Enter Ticket Price"
                        value={vistara}
                        onChange={(e) => setVistara(e.target.value)}
                      />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs="auto">
                  <Button className="mb-2" onClick={handleSubmitFlight}>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
