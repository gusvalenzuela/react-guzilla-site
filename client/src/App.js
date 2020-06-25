import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "react-sidebar";
import NoMatch from "./pages/NoMatch";
import Portfolio from "./pages/Portfolio";
import Homepage from "./pages/Homepage";
import Other from "./pages/Other";
import Nav from "./components/Nav";
import SidebarToggle from "./components/SidebarToggle";
import Head from "./components/Head";
import Foot from "./components/Foot";
import "./pages/mainstyle.css";

function App() {
  const viewportMin = window.matchMedia(`(min-width: 768px)`);
  const [sideNavOpen, setSideNavOpen] = useState(viewportMin.matches);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [smallScreen, setSmallScreen] = useState(!viewportMin.matches);

  const listener = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setSideNavOpen(viewportMin.matches);
  };

  useEffect(() => {
    // true = bigger than selected min-width
    // if display size is < 768px
    if (!viewportMin.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
    window.addEventListener("resize", listener);
  }, [windowWidth]);

  function handleOpeningSidebar() {
    if (!sideNavOpen) {
      setSideNavOpen(true);
    } else {
      setSideNavOpen(false);
    }
  }

  return (
    <Router>
      <div>
        <Sidebar
          sidebar={<Nav />}
          open={smallScreen ? sideNavOpen : false}
          onSetOpen={handleOpeningSidebar}
          docked={smallScreen ? false : sideNavOpen}
          pullRight={true}
          styles={{ sidebar: { background: "#eeeeee" } }}
        >
          <SidebarToggle
            isOpen={sideNavOpen}
            smallScreen={smallScreen}
            handleOpeningSidebar={() => handleOpeningSidebar()}
          />
          <Switch>
            <Route exact path="/">
              <Head textContent="HOME" />
              <Homepage windowHeight={windowHeight} />
            </Route>
            <Route exact path={["/portfolio", "/portfolios", "/projects"]}>
              <Head textContent="PORTFOLIO" />
              <Portfolio />
              
            </Route>
            <Route>
              <Head textContent="OTHER" />
              <Other />
            </Route>
            <Route>
              <Head textContent="Uh Oh, 404!" />
              <NoMatch />
            </Route>
          </Switch>
          <Foot />
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
