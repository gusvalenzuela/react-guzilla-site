import React from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ResumeModal = ({ Button }) => (
  <Modal trigger={Button} closeIcon centered={false}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <iframe
        src="https://drive.google.com/file/d/1BAKRO71SHDIP6wDSVzL1A7WOHWOJBcJj/preview"
        width="300"
        height="175"
        title="Gustavo Valenzuela Resume DOCX"
      ></iframe>
    </Modal.Content>
  </Modal>
);

export default ResumeModal;
