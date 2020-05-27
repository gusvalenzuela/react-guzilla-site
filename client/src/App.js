import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio";
import Homepage from "./pages/Homepage";
import Sidebar from "react-sidebar";
import SidebarToggle from "./components/SidebarToggle";
import Head from "./components/Head";

function App() {
  const viewportMin = window.matchMedia(`(min-width: 768px)`);
  const [sideNavOpen, setSideNavOpen] = useState(viewportMin.matches);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const listener = () => {
    setWindowWidth(window.innerWidth);
    setSideNavOpen(viewportMin.matches);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [windowWidth]);

  function handleOpeningSidebar(event) {
    // event.preventDefault();
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
          open={false}
          onSetOpen={handleOpeningSidebar}
          docked={sideNavOpen}
          pullRight={true}
          styles={{ sidebar: { background: "#eeeeee" } }}
        >
          <SidebarToggle isOpen={sideNavOpen} handleOpeningSidebar={() => handleOpeningSidebar()} />
          <Switch>
            <Route exact path="/">
              <Head textContent="HOME" />
              <Homepage />
            </Route>
            <Route exact path={["/portfolio", "/portfolios", "/projects"]}>
              <Head textContent="PORTFOLIO" />
              <Portfolio />
            </Route>
            <Route>
              <Head textContent="Uh Oh, 404!" />
              <NoMatch />
            </Route>
          </Switch>
        </Sidebar>
      </div>
    </Router>
  );
}

export default App;
