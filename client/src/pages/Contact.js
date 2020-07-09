import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import API from "../utils/API";

function Contact() {
  document.title = `gusVALENZUELA | Contact`;
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
    success: "",
  });
  function handleFormSubmission(event) {
    event.preventDefault();
    API.sendContactEmail(emailData).then((res) => {
      if ((res.data = `success`)) {
        setEmailData({ ...emailData, success: true });
      } else {
        setEmailData({ ...emailData, success: false });
      }
    });
  }
  return (
    <div className="contact-container">
      <div
        style={{
          display: `${!emailData.success ? "none" : ""}`,
          padding: "2rem",
          textAlign: "center",
          color: "#ff0000",
          fontWeight: "800",
        }}
      >
        <p>Thank you, {emailData.name}! Message sent successfully.</p>
      </div>
      <Form action="#" className="contact-form">
        <Form.Field>
          <label>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Obi Wan Kenobi"
            onChange={(e) =>
              setEmailData({ ...emailData, name: e.target.value })
            }
            value={emailData.name}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="MasterOWB@jediorder.com"
            onChange={(e) =>
              setEmailData({ ...emailData, email: e.target.value })
            }
            value={emailData.email}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            maxLength="4096"
            placeholder="Hi there!"
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
            value={emailData.message}
          />
        </Form.Field>
        <Button type="submit" content="Send" onClick={handleFormSubmission} />
      </Form>
      <section style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>Other ways to contact me</p>
        <div className="contact-page-icons">
          <a
            href="https://github.com/gusvalenzuela"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          {/* <li>
            <a href="" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li> */}
          {/* <li>
            <a href="#target-1" target="_blank"  rel="noopener noreferrer">
              <i className="fa fa-pinterest-p" aria-hidden="true"></i>
            </a>
          </li> */}
          <a
            href="https://twitter.com/vrsulo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
