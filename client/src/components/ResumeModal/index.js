import React, { useEffect, useState } from "react";
import { Modal, Segment, Dimmer, Loader } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ResumeModal = ({ Button }) => {
  const [loading, setLoading] = useState(true);
  return (
    <Modal size="fullscreen" trigger={Button} closeIcon centered={true}>
      <Modal.Header>Resume</Modal.Header>
      <Modal.Content
        onLoad={() => {
          setLoading(false);
        }}
        as="iframe"
        // className="lazyload"
        src="https://drive.google.com/file/d/1BAKRO71SHDIP6wDSVzL1A7WOHWOJBcJj/preview"
        height="95%"
        style={{ display: `${loading ? "none" : ""}` }}
        title="Gustavo ValenSzuela Resume DOCX"
      ></Modal.Content>

      {loading ? (
        <Dimmer active>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : (
        ""
      )}
    </Modal>
  );
};

export default ResumeModal;
