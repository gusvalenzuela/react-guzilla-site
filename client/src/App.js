import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Portfolio from "./pages/Portfolio";
import CMSprojects from "./pages/CMSprojects";
import Homepage from "./pages/Homepage";
import Sidebar from "react-sidebar";

function App() {
  const viewportMin = window.matchMedia(`(min-width: 768px)`);
  const [sideNavDocked, setSideNavDocked] = useState(!viewportMin.matches);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const listener = () => {
    setWindowWidth(window.innerWidth);
    setSideNavDocked(!viewportMin.matches);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [windowWidth]);

  function handleOpeningSidebar(event) {
    // event.preventDefault();
    if (!sideNavDocked) {
      setSideNavDocked(true);
    } else {
      setSideNavDocked(false);
    }
  }

  // console.log(viewportMin)
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={sideNavDocked}
          docked={sideNavDocked}
          // onSetOpen={true}
          styles={{ sidebar: { background: "red" } }}
        ></Sidebar>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path={["/portfolio", "/portfolios", "/projects"]}>
            <Portfolio handleOpeningSidebar={()=>handleOpeningSidebar()} />
          </Route>
          {/* <Route exact path="/cms/projects/:id">
            <Detail />
          </Route> */}
          <Route exact path="/cms/projects">
            <CMSprojects />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
