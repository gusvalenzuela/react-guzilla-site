import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import Card from "../components/Card";
import localProjects from "../utils/localProjects.json";
import Foot from "../components/Foot";

function Portfolio({ handleOpeningSidebar }) {
  // let update =

  // Setting our component's initial state
  const [projects, setProjects] = useState([]);

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }
  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();

    API.getGitUpdateData().then((gitData) => {
      gitData.data.forEach((item) => {
        // console.log(`${item.name}\r\n last updated ${item.updated_at}`);
      });
    });
  }, []);

  function handleSeed() {
    localProjects.forEach((i) => {
      API.saveProject(i);
    });
  }

  return (
    <div role="main" className="container-fluid p-0 h-100">
      <Row className="row justify-content-start m-0">
        <Col size="lg-7" style={{ padding: 0 }}>
          {projects.length ? (
            projects.map((Project, index) => (
              // card requires a key [has default image src "defaultimage01.jpg" if none given]
              <Card key={index} imgSrc={Project.img_src}>
                <h3>{Project.title}</h3>
                <p>{Project.lead}</p>
                <p>Last updated 1 week ago</p>
                <a href={Project.app_url}>
                  <i className="fa fa-chevron-right"> app</i>
                </a>
                <a href={Project.repo_url}>
                  <i className="fa fa-github"> source code</i>
                </a>
              </Card>
            ))
          ) : (
            <div>
              <h3>No Results to Display</h3>
              <button
                onClick={() => {
                  handleSeed();
                }}
              >
                SEED ME
              </button>
            </div>
          )}
        </Col>
      </Row>
      <Foot />
    </div>
  );
}

export default Portfolio;
