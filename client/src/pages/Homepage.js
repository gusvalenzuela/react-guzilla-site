import React from "react";
import { Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

function Homepage({ windowHeight }) {
  return (
    <div className="homepage-container">
      <div className="callout-index row" id="callout">
        <div
          className="top-bar-custom" style={{ minHeight: `${windowHeight}px` }}
        >
          <p className="header-index" id="header">
            Gus Valenzuela
          </p>
          <p className="subheader-index" id="subheader">
            A responsive web developer for the modern world.
          </p>
        </div>
      </div>

      <div className="row intro-para-row justify-content-center">
        <div className="col-md-10 col-lg-8" id="about-me">
          <header className="welcome-header">Welcome to my site.</header>
          <img src="./assets/images/profilephoto3.jpg" alt="Profile Photo" className="profile-photo"></img>
          <p style={{ textAlign: "justify" }}>
            Since an adolescent, I have been fascinated with technology, computers, and the world wide web. I made
            static webpages in my youth and even got to deploy some flash-centric wonders. Over the years my love of
            technology and computers only grew more powerful - occassionally doing activites on FreeCodeCamp and taking
            computer science courses at the local community college.
            Most recently I have been attending a Coding Bootcamp, by Trilogy/UC Davis Continuing Education, on the path to
        becoming a full stack web developer. I hope to continue to grow as a web developer and as a person.</p>
          <p>
            Please take a look around at my portfolio and if maybe you like what you see, shoot me an email. Hope to
            hear from you! Have a wonderful day =] </p>


        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col col-md-8 " id="quotebox">
          <Segment raised>

            <p>"And remember, the world is possibility if only you'll discover it." </p>
          </Segment>
          <img className="index-quoteblock-vertical-avatar" src="./assets/images/ellison-avatar.jpg" alt=""></img>
          <p className="index-quoteblock-vertical-name">Ralph Ellison, <i>Invisible Man</i></p>
        </div>
      </div >
    </div>
  );
}

export default Homepage;
