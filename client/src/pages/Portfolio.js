import React, { useState, useEffect } from "react";
import moment from "moment";
import API from "../utils/API";
import "./mainstyle.css";
import { Row } from "../components/Grid";
import Card from "../components/Card";
import localProjects from "../utils/localProjects.json";
import { Dimmer, Loader } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

import ResumeCard from "../components/ResumeCard";

function Portfolio() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMessage, setLoadMessage] = useState("loading portfolio, shouldn't be long.")

  function changeLoadingMsg() {
    setTimeout(() => {
      setLoadMessage("loading portfolio, any second now...")
    }, 10000);  // 10 sec
    setTimeout(() => {
      setLoadMessage("How embarrassing, it shouldn't be taking this long. Something's wrong.")

    }, 60000); // 60 sec
  }
  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then((res) => {
        if (!res.data || res.data.length < 1) {
          res.data = localProjects;
        }
        loadGithubData(res.data);
      })
      .catch((err) => console.log(err));
  }
  function loadGithubData(data) {
    API.getGitUpdateData().then((gitData) => {
      if (gitData !== `error`) {
        gitData.data.forEach((item) => {
          data.forEach((proj) => {
            if (proj.repo_name === item.name) {
              proj.updated_at = item.updated_at;
            }
          });
        });
      }
      setProjects(data);
      setLoading(false);
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

  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects();
    changeLoadingMsg()
  }, []);

  return (

    <div
      onClick={() => {
        setKC("run");
        KonamiCode = [];
      }}
      role="main"
      className="container-fluid p-0"
    >

      <div className="row justify-content-end m-0">

        {projects.length
          ? projects.map((Project, index) => (
            // card requires a key [has default image src "defaultimage01.jpg" if none given]
            <Card key={index} imgSrc={Project.img_src}>
              <h3>{Project.title}</h3>
              <p style={{ fontSize: "14px" }}>{Project.libraries}</p>
              <p>{Project.lead}</p>
              {Project.updated_at ? (
                <p>Updated {moment(Project.updated_at).fromNow()}</p>
              ) : (
                  ""
                )}
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
          ))
          : ""}

        {loading ? (
            <Dimmer className="portfolio-dimmer" active>
              <Loader indeterminate inline='centered' size="large">{loadMessage}</Loader>
            </Dimmer>
        ) : (
            <ResumeCard />
          )}
      </div>
    </div>
  );
}

export default Portfolio;
