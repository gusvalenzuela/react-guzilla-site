import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import API from "../utils/API";

function Contact() {
  document.title = `gusVALENZUELA | Contact`;
  const emailOptions = {
    name: "",
    email: "",
    message: "",
    success: "",
    btnMsg: "Send",
  };
  const [emailData, setEmailData] = useState(emailOptions);

  function handleFormSubmission(event) {
    event.preventDefault();

    setEmailData({ ...emailData, btnMsg: "Sending..." });

    API.sendContactEmail(emailData).then((res) => {
      if ((res.data = `success`)) {
        setEmailData({ ...emailData, success: true, btnMsg: "Sent" });
      } else {
        setEmailData({ ...emailData, success: false, btnMsg: "Fail" });
      }
      // after 5 secs, form data and message/toast is cleared
      setTimeout(() => {
        setEmailData(emailOptions);
      }, 5000);
    });
  }
  return (
    <div className="contact-container">
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
        <div style={{ display: "flow-root" }}>
          <div
            style={{
              display: `${emailData.success ? "none" : ""}`,
              padding: "1rem",
              textAlign: "center",
              color: "#ff0000",
              fontWeight: "800",
            }}
          >
            <p>Thank you, {emailData.name}! Message successfully sent.</p>
          </div>
          <Button
            type="submit"
            content={emailData.btnMsg}
            onClick={handleFormSubmission}
            style={{ float: "right", width: "auto", padding: "1rem 2rem" }}
          />
        </div>
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
