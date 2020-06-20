import React from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ResumeModal = ({ Button }) => {
  return (
    <Modal size="fullscreen" trigger={Button} closeIcon centered={true}>
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content
        as="iframe"
        src="https://drive.google.com/file/d/1BAKRO71SHDIP6wDSVzL1A7WOHWOJBcJj/preview"
        height="95%"
        title="Gustavo Valenzuela Resume DOCX"
      >
        {/* <iframe
            
          ></iframe> */}
      </Modal.Content>
    </Modal>
  );
};

export default ResumeModal;
