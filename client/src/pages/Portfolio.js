import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function Projects({handleOpeningSidebar}) {
  // Setting our component's initial state
  const [projects, setProjects] = useState([]);

  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();
  }, []);

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }

  // console.log(projects);

  return (
    <Container fluid>
      <Row>
        <Col size="md-9 sm-12">
          <button onClick={handleOpeningSidebar}>Open/Close sidebar</button>
          {projects.length ? (
            <List>
              {projects.map((Project) => (
                <div className="card bg-dark text-white rounded-0">
                  <img
                    className="card-img"
                    src={"./assets/images/" + Project.img_src}
                    alt="Card image"
                    // style={{maxHeight:200}}
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title">{Project.title}</h5>
                    <p className="card-text">{Project.lead}</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                    <DeleteBtn onClick={() => alert(Project._id)} />
                  </div>
                </div>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
        <Col size="md-3">
          <div>
            <h3>
              portfolio,<br></br>
              works,<br></br>
              projects,<br></br>
              ideas..<br></br>.
            </h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
