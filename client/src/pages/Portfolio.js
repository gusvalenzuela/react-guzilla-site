import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./mainstyle.css";
// import { Link } from "react-router-dom";
import { Row } from "../components/Grid";
import Card from "../components/Card";
import localProjects from "../utils/localProjects.json";
import Foot from "../components/Foot";
import ResumeCard from "../components/ResumeCard";

function Portfolio({ handleOpeningSidebar }) {
  // Setting our component's initial state
  const [projects, setProjects] = useState([]);
  const [repoNames, setRepoNames] = useState([]);

  // KONAMI CODE
  const [KC, setKC] = useState(null);
  var KonamiCode = [];
  // Add event listeners
  useEffect(() => {
    if (KC !== null) {
      window.addEventListener("keyup", (evt) => {
        KonamiCode.push(evt.code);
        console.log(evt.code);
        if (KonamiCode.length === 10) {
          if (
            KonamiCode.join(``) ===
            "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA"
          ) {
            setKC("KC");
            return;
          }

          console.log(`wommmmp`);
          return;
        } else if (KonamiCode.length > 10) {
          KonamiCode = [];
        }
      });
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keyup", (evt) => {
          console.log(evt.code);
        });
      };
    }

    if (KC === "KC") {
      // winner, winner
      // do this
      console.log(window.location);
    }
  }, [KC, KonamiCode]);

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.log(err));
  }
  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();

    const repo = projects
      ? projects.map((i) => {
          let temp = i.repo_url.split(`/`);
          return temp[temp.length - 1];
        })
      : localProjects.map((i) => {
          let temp = i.repo_url.split(`/`);
          return temp[temp.length - 1];
        });

    setRepoNames(repo);
  }, []);

  useEffect(() => {
    if (repoNames && repoNames.length > 0) {
      API.getGitUpdateData().then((gitData) => {
        gitData.data.forEach((item) => {
          repoNames.forEach((name) => {
            if (name === item.name) {
              projects.forEach((proj) => {
                console.log(proj);
              });
              console.log(`${item.name}\r\n last updated ${item.updated_at}`);
            }
          });
        });
      });
    }
  }, [repoNames]);

  return (
    <div
      onClick={() => {
        setKC("run");
      }}
      role="main"
      className="container-fluid p-0 h-100"
    >
      <Row className="row justify-content-end m-0">
        {projects.length
          ? projects.map((Project, index) => (
              // card requires a key [has default image src "defaultimage01.jpg" if none given]
              <Card key={index} imgSrc={Project.img_src}>
                <h3>{Project.title}</h3>
                <p style={{ fontSize: "14px" }}>{Project.libraries}</p>
                <p>{Project.lead}</p>
                {/* <p>Last updated {Project.updated_at}</p> */}
                <a href={Project.app_url}>
                  <i className="fa fa-chevron-right"> app</i>
                </a>
                <a href={Project.repo_url}>
                  <i className="fa fa-github"> source code</i>
                </a>
              </Card>
            ))
          : localProjects.map((Project, index) => (
              // card requires a key [has default image src "defaultimage01.jpg" if none given]
              <Card key={index} imgSrc={Project.img_src}>
                <h3>{Project.title}</h3>
                <p style={{ fontSize: "14px", fontWeight: "200" }}>
                  {Project.libraries}
                </p>
                <p>{Project.lead}</p>
                {/* <p>Last updated {Project.updated_at}</p> */}
                <a href={Project.app_url}>
                  <i className="fa fa-chevron-right"> app</i>
                </a>
                <a href={Project.repo_url}>
                  <i className="fa fa-github"> source code</i>
                </a>
              </Card>
            ))}
        <ResumeCard />
      </Row>
      <Foot />
    </div>
  );
}

export default Portfolio;
