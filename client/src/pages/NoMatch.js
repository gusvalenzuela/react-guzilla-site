import React from "react";
function NoMatch() {
  return (
    <div role="main" style={{ height: "100%", padding: "3.375rem" }}>
      <div style={{ float: "right" }}>
        <section
          style={{
            float: "right",
            fontSize: "5.063rem",
            margin: "0",
            padding: "1.5rem",
          }}
        >
          <span role="img" aria-label="Frowning Face with Open Mouth Emoji">
            😦
          </span>
        </section>
        <h1 style={{ color: "#020202" }}>404: Page Not Found</h1>
        <p
          style={{
            color: "#020202",
            marginTop: "7.594rem",
            fontSize: "1.5rem",
          }}
        >
          Try one of the links on the right{" "}
          <span style={{verticalAlign:"super"}} role="img" aria-label="Backhand Index Pointing Right Emoji">
            👉
          </span>
        </p>
      </div>
    </div>
  );
}

export default NoMatch;
