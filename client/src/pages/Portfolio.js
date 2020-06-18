import React, { useState, useEffect } from "react";
import moment from "moment"
import API from "../utils/API";
import "./mainstyle.css";
import { Row } from "../components/Grid";
import Card from "../components/Card";
import localProjects from "../utils/localProjects.json";
import Foot from "../components/Foot";
import ResumeCard from "../components/ResumeCard";

function Portfolio() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([]);

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => {
        if (!res.data || res.data.length < 1) {
          res.data = localProjects
        }
        loadGithubData(res.data)
      })
      .catch((err) => console.log(err));

  }
  function loadGithubData(data) {
    API.getGitUpdateData().then((gitData) => {
      gitData.data.forEach((item) => {
        data.forEach((proj) => {
          if (proj.repo_name === item.name) {
            proj.updated_at = item.updated_at
            // console.log(`${item.name}\r\n last updated ${item.updated_at}`);
          }
        });
      });
      setProjects(data)
    });
  }
  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();

  }, []);


  return (
    <div role="main" className="container-fluid p-0 h-100">
      <Row className="row justify-content-end m-0">
        {projects.length
          ? projects.map((Project, index) => (
            // card requires a key [has default image src "defaultimage01.jpg" if none given]
            <Card key={index} imgSrc={Project.img_src}>
              <h3>{Project.title}</h3>
              <p style={{ fontSize: "14px" }}>{Project.libraries}</p>
              <p>{Project.lead}</p>
              <p>Last updated {moment(Project.updated_at).calendar()}</p>
              <a href={Project.app_url} rel="noopener noreferrer"
                target="_blank">
                <i className="fa fa-chevron-right"> app</i>
              </a>
              <a href={Project.repo_url} rel="noopener noreferrer"
                target="_blank">
                <i className="fa fa-github"> source code</i>
              </a>
            </Card>
          ))
          : ""}
        <ResumeCard />
      </Row>
      <Foot />
    </div>
  );
}

export default Portfolio;
