import React from "react";
import { Col, Row, Container } from "../components/Grid";

function Homepage() {
  return (
    <div className="h-100">
      <Container fluid>
        <Row>
          <Col style={{ clear: "both", padding: "0" }}>
            <div
              style={{
                height: "100%",
                clear: "both",
                paddingTop: "7rem",
                textAlign: "right",
                border: "1px solid transparent",
              }}
              className="jumbotron mx-0"
            >
              <h1>Welcome to my site, have a look around</h1>
              <div className="homepage-emoji"></div>
            </div>
          </Col>
        </Row>
        {/* <Row>
          <Col style={{ clear: "both", padding: "0" }}>
            <p>Welcome to my site, have a look around</p>
            <div className="homepage-emoji"></div>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Homepage;
