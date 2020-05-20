import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col style={{ clear: "both", padding: "0" }}>
          <Jumbotron>
            <h1>Welcome to my new, NEW site</h1>
            <h1>
              <span
                style={{ fontSize: "7rem", transform: "scaleX(-1)" }}
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
  );
}

export default NoMatch;
