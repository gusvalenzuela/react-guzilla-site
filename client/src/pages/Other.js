import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <div className="jumbotron-fluid text-center">
            <h1>Page under construction</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🤗
              </span>
            </h1>
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
