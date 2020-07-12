import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../utils/API";
import "./mainstyle.css";
import Card from "../components/Card";
import { Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import ResumeCard from "../components/ResumeCard";

function Portfolio() {
  document.title = `grv.Portfolio`;
  const PortfolioVersion = 2; // change the version when changes to projectsDB are made so cache is updated

  // Setting our component's initial state
  const [projects, setProjects] = useState([]);
  const [loadMessage, setLoadMessage] = useState(
    "loading portfolio, shouldn't be long."
  );

  // "on  mounty"
  useEffect(() => {
    // Load all Projects and store them with setProjects
    loadProjects();
    // load timeout for changing message, notifying user loading is taking unusually long
    changeLoadingMsg();
    // clear any old projects cache
    clearOldProjectsCache();
  }, []);

  // listening to projects
  useEffect(() => {
    saveProjCache();
  }, [projects]);

  function saveProjCache() {
    let sanitizedProjects = projects.map((i) => {
      delete i._id;
      return i;
    });
    localStorage.setItem(
      `gusvalenzuela.com-cache-v${PortfolioVersion}-projects`,
      JSON.stringify(sanitizedProjects)
    );
  }
  function clearOldProjectsCache() {
    for (let i = 0; i < PortfolioVersion; i++) {
      localStorage.removeItem(`gusvalenzuela.com-cache-v${i}-projects`);
    }
  }
  function changeLoadingMsg() {
    setTimeout(() => {
      setLoadMessage("loading portfolio, any second now...");
    }, 10000); // 10 sec
    setTimeout(() => {
      setLoadMessage(
        "How embarrassing, it shouldn't be taking this long. Something's wrong."
      );
    }, 60000); // 60 sec
  }
  // Loads all Projects and sets them to Projects
  function loadProjects() {
    //checking to see if a local projects obj exists, and using that
    const localStorageProjects = JSON.parse(
      localStorage.getItem(
        `gusvalenzuela.com-cache-projects-v${PortfolioVersion}`
      )
    );

    if (localStorageProjects && localStorageProjects.length > 0) {
      return loadGithubData(localStorageProjects);
    }

    API.getProjects()
      .then((res) => {
        if (!res.data || res.data.length < 1) {
          res.data = [];
        }
        loadGithubData(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadGithubData(Projects) {
    // set Projects for quick rendering
    // git data can be updated/rendered later
    setProjects(Projects);

    API.getGitUpdateData().then((repos) => {
      if (repos !== `error`) {
        // looping through all repos' git data
        repos.data.forEach((item) => {
          // adding last updated date to each of projects in state
          Projects.forEach((proj) => {
            if (proj.repo_name === item.name) {
              proj.updated_at = item.updated_at;
            }
          });
        });
        setProjects(Projects); // set projects to local or pulled Projects after updating with git data
      }

    });
  }

  // KONAMI CODE
  const [KC, setKC] = useState(null);
  var KonamiCode = [];

  useEffect(() => {
    if (KC === "KC") {
      // winner, winner
      // do this
      window.location.href = process.env.KONAMI_LINK;
    }
    if (KC !== null) {
      // Add event listeners
      window.addEventListener("keyup", (evt) => {
        KonamiCode.push(evt.code.trim());
        if (KonamiCode.length === 10) {
          console.log(KonamiCode.join(``), KonamiCode.length);
          if (
            KonamiCode.join(``).toString() ===
            "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA"
          ) {
            setKC("KC");
          }
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
  }, [KC, KonamiCode]);

  return projects.length ? (
    <>
      <div
        onClick={() => {
          setKC("run");
          KonamiCode = [];
        }}
        role="main"
        className="container-fluid p-0"
      >
        <div className="row justify-content-end m-0 portfolio">
          {projects.map((Project, index) => (
            // card requires a key [has default image src "defaultimage01.jpg" if none given]
            <Card key={index} imgSrc={Project.img_src}>
              <h2>{Project.title}</h2>
              <p style={{ float: "right", color: "#ffffffa4" }}>
                {Project.updated_at ? `Updated ${moment(Project.updated_at).fromNow()}` : ""}
              </p>

              <p style={{ color: "#ffffffa4" }}>{Project.libraries}</p>
              <p style={{ fontSize: "1.1rem" }}>{Project.lead}</p>

              <a
                href={Project.app_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-chevron-right"> open</i>
              </a>
              <a
                href={Project.repo_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github"> code</i>
              </a>
            </Card>
          ))}
          <ResumeCard />
        </div>
      </div>
    </>
  ) : (
    <Dimmer role="dialog" active>
      <Loader indeterminate inline="centered" size="large">
        {loadMessage}
      </Loader>
    </Dimmer>
  );
}

export default Portfolio;
