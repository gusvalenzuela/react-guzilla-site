import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import API from "../utils/API";

function Contact() {
  document.title = `grv.Contact`;
  const emailDefault = {
    name: "",
    email: "",
    message: "",
    success: "",
    btnMsg: "Send",
    attempts: 0,
  };
  const [emailData, setEmailData] = useState(emailDefault);

  function handleFormSubmission(event) {
    event.preventDefault();

    // name & email is "required"
    if ((emailData.name.trim() && emailData.email.trim()) !== "") {
      setEmailData({ ...emailData, btnMsg: "Sending..." });

      API.sendContactEmail(emailData).then((res) => {
        if ((res.data = `success`)) {
          setEmailData({ ...emailData, success: true, btnMsg: "Sent" });
        } else {
          setEmailData({ ...emailData, success: false, btnMsg: "Fail" });
        }
        // after 5 secs, form data and message/toast is cleared
        setTimeout(() => {
          setEmailData(emailDefault);
        }, 5000);
      });
    } else {
      // keep count of attempts at sending without populating required fields
      // used in displaying error border around field(s)
      setEmailData({ ...emailData, attempts: emailData.attempts + 1 });

      // clearing attempts after 5 secs (removing error border)
      setTimeout(() => {
        setEmailData({ ...emailData, attempts: 0 });
      }, 2500);
    }
  }
  return (
    <div id="contact-container" role="main">
      <Form action="#" className="contact-form">
        <Form.Field>
          <label>
            Name{" "}
            <span style={{ color: "#ff0000ff", fontWeight: "600" }}>*</span>
            <span style={{ float: "right" }}>* Required Fields</span>
          </label>
          <input
            className={`input ${
              emailData.name === "" && emailData.attempts > 0
                ? "display-error"
                : ""
            }`}
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
          <label>
            Email{" "}
            <span style={{ color: "#ff0000ff", fontWeight: "600" }}>*</span>
          </label>
          <input
            className={`input ${
              emailData.email === "" && emailData.attempts > 0
                ? "display-error"
                : ""
            }`}
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
            className="input"
            id="message"
            name="message"
            type="text"
            maxLength="4096"
            placeholder="Hello there!"
            onChange={(e) =>
              setEmailData({ ...emailData, message: e.target.value })
            }
            value={emailData.message}
          />
        </Form.Field>
        <div style={{ display: "flow-root" }}>
          <div
            style={{
              display: `${!emailData.success ? "none" : ""}`,
              padding: "1rem",
              textAlign: "center",
              color: "#ff0000",
              fontWeight: "800",
            }}
          >
            <p>Thank you{`, ${emailData.name}`}! Message successfully sent.</p>
          </div>
          <Button
            type="submit"
            secondary
            content={emailData.btnMsg}
            onClick={handleFormSubmission}
            style={{ float: "right", width: "auto", padding: "1rem 2rem" }}
          />
        </div>
      </Form>
      <section style={{ textAlign: "center", marginTop: "1rem" }}>
        <p>Alternatively,</p>
        <div className="contact-page-icons">
          <a
            href="mailto:gusrvalenzuela@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
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
          {/* <a
            href="https://twitter.com/vrsulo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a> */}
        </div>
      </section>
    </div>
  );
}

export default Contact;
