import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col style={{ clear: "both", padding: "0" }}>
          <div
            style={{
              clear: "both",
              paddingTop: "7rem",
              textAlign: "right",
              border: "1px solid transparent",
              margin: "0"
            }}
            className="jumbotron"
          >
            <h1>Page Under Construction</h1>
            <div className="homepage-emoji"></div>
          </div>
          <Card key={10}>
            <h3>Audio</h3>
            <ul>
              <li>Song 1</li>
              <li>Song 2</li>
              <li>Song 3</li>
            </ul>
          </Card>
          <Card key={10}>
            <h3>Video</h3>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
