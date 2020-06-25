import React from "react";

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
      <div className="row mb-4 justify-content-center">
        <div className="col-10" >
          <p style={{ textAlign: "justify" }}>
            In the <a href="/portfolio" className="text-link">portfolio</a> page of this website you will find projects I have created or worked on. In the <a href="/contact"
              className="text-link">contact</a> page you'll find a form you may use to contact me. (🚧 "under construction" 🚧)
      </p>

        </div>
      </div>
    </div >
  );
}

export default Homepage;
