import React, { useEffect, useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import BottomChevron from "../components/BottomChevron";

function Homepage({ windowHeight, windowWidth, smallScreen }) {
  document.title = `grv.Home`;
  const [scrollTop, setScrollTop] = useState(null);

  // "on  mounty"
  useEffect(() => {
    // grabbing the parent element of scroll we're capturing
    // setting its scrolltop value to state
    setScrollTop(
      document.getElementById(`homepage-container`).parentElement.scrollTop
    );
    // removing godzilla from homepage nav background
    document.getElementById(`sidenavbar`).style =
      "background: transparent !important;";
  }, []);

  const scrollListener = () => {
    setScrollTop(
      document.getElementById(`homepage-container`).parentElement.scrollTop
    );
  };

  useEffect(() => {
    // adds scroll listener to the element we're capturing
    // calls function which then sets new scrolltop value
    document
      .getElementById(`homepage-container`)
      .parentElement.addEventListener(`scroll`, scrollListener);
  }, [scrollTop]);

  return (
    <div className="homepage-container" id="homepage-container">
      <div className="callout-index row" id="callout">
        <div
          className="top-bar-custom"
          style={{ minHeight: `${windowHeight - 150}px` }}
        >
          <p className="header-index" id="header">
            Gus Valenzuela
          </p>
          <p className="subheader-index" id="subheader">
            A responsive web developer for the modern world.
          </p>
        </div>
      </div>
      <div className="homepage-header-btns">
        <Button.Group color="red" size={smallScreen ? "medium" : "massive"}>
          <Button as="a" href="/portfolio">Portfolio</Button>
          <Button.Or text="" />
          <Button as="a" href="/contact">Contact</Button>
        </Button.Group>
      </div>
      <BottomChevron
        visible={scrollTop <= 42 ? true : false}
        windowWidth={windowWidth}
      />

      <div className="row intro-para-row justify-content-center m-0">
        <div className="col-10 col-xl-7" id="about-me">
          <header className="welcome-header">Welcome to my site.</header>
          <img
            src="./assets/images/profilephoto3.jpg"
            alt="Headshot of moi"
            className="profile-photo"
          ></img>
          <p>
            Since an adolescent, I have been fascinated with technology,
            computers, and the world wide web. I made static webpages in my
            youth and even got to deploy some flash-centric wonders. Over the
            years my love of technology and computers only grew more powerful -
            occassionally doing activites on FreeCodeCamp and taking computer
            science courses at the local community college. Most recently I
            completed a Coding Bootcamp, by Trilogy/UC Davis Continuing
            Education, earning a certificate in Full Stack Web Development. I
            hope to continue to grow as a web developer and as a person.
          </p>
          <p>
            Please take a look around my{" "}
            <a href="/portfolio" className="text-link">
              portfolio
            </a>{" "}
            and if maybe you like what you see head over to my{" "}
            <a href="/contact" className="text-link">
              contact
            </a>{" "}
            page And shoot me an email. Hope to hear from you! Have a wonderful
            day =]
          </p>
        </div>
      </div>
      <div className="row justify-content-center m-0 skillsbox">
        <div className="col-10 col-lg-2">
          <Segment inverted style={{ textAlign: "right", height: "100%" }}>
            <p>Technical Skills and Experience</p>
          </Segment>
        </div>
        <div className="col-10 col-lg-5">
          <Segment vertical>
            <b>FRONT END</b>: HTML5, CSS3, Bootstrap, React
          </Segment>
          <Segment vertical>
            <b>BACK END</b>: Node, MySQL, MongoDB, Express, Mongoose, Sequelize
          </Segment>
          <Segment vertical>
            <b>OTHER</b>: JavaScript, Git, SQL, JSON, GitHub, MVC, AJAX,
            Handlebars, jQuery, REST, APIs, UI, OAuth2
          </Segment>
        </div>
      </div>
      <div className="row quotebox justify-content-center m-0">
        <div>
          <Segment className="index-quoteblock-vertical-quote">
            <p>
              "And remember, the world is possibility{" "}
              <i>
                <b>[sic]</b>
              </i>{" "}
              if only you'll discover it."{" "}
            </p>
          </Segment>
          <div className="index-quoteblock-vertical-person">
            <img
              className="index-quoteblock-vertical-avatar"
              src="./assets/images/ellison-avatar.jpg"
              alt=""
            />
            <div>
              <p className="index-quoteblock-vertical-name">Ralph Ellison</p>
              <p className="index-quoteblock-vertical-info">Invisible Man</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
