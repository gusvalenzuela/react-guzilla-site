import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import localProjects from "../utils/localProjects.json"

function Projects({ handleOpeningSidebar }) {
  // let update =

  // Setting our component's initial state
  const [projects, setProjects] = useState([]);
  const [updateTimer, setUpdateTimer] = useState(Date.now());

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }
  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();
  }, []);

  function handleSeed(){
    localProjects.forEach(i=>{
      API.saveProject(i)
    })
  }

  useEffect(() => {
    console.log(updateTimer);
  }, [updateTimer]);

  API.getGitUpdateData(`quiz-game`).then((gitData) => {
    console.log(gitData.data[0].created_at);
  });

  return (
    <div className="container-fluid p-0">
      <Row className="row justify-content-end">
        <Col size="lg-7">
          {projects.length ? (
            projects.map((Project, index) => (
              // card requires a key [has default image src "defaultimage01.jpg" if none given]
              <a href={Project.app_url}>
                <Card key={index} imgSrc={Project.img_src}>
                  <h5 className="card-title">{Project.title}</h5>
                  <p className="card-text">{Project.lead}</p>
                  <p className="card-text">Last updated 1 week ago</p>
                </Card>
              </a>
            ))
          ) : (
            <div>
              <h3>No Results to Display</h3>
              <button onClick={()=>{handleSeed()}}>SEED ME</button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Projects;
