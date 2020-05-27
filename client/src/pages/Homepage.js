import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Homepage() {
  return (
    <div className="h-100">
      <Container fluid>
        <Row>
          <Col style={{ clear: "both", padding: "0" }}>
            <Jumbotron>
              <h1>Welcome to my site, have a look around</h1>
              <h1>
                <span
                  style={{ fontSize: "7rem" }}
                  role="img"
                  aria-label="Face With Rolling Eyes Emoji"
                >
                  🙄
                </span>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
