import React from "react";
import "./style.css";
import ResumeModal from "../ResumeModal";
import { List } from "semantic-ui-react";

function ResumeCard() {
  return (
    <div className="card-semantic col-12 col-md-6 col-xl-4">
      <List divided relaxed="very">
        <List.Item>
          <List.Icon name="sticky note" size="large" verticalAlign="middle" />
          <List.Content>
            <ResumeModal
              Button={<List.Header as="a">Open Resume</List.Header>}
            />
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="github" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/gusvalenzuela"
            >
              GitHub Profile
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkedin" size="large" verticalAlign="middle" />
          <List.Content>
            <List.Header
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/gus-valenzuela-b73b0296/"
            >
              LinkedIn Profile
            </List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon
            name="envelope outline"
            size="large"
            verticalAlign="middle"
          />
          <List.Content>
            <List.Header
              as="a"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:gusrvalenzuela@gmail.com"
            >
              gusrvalenzuela@gmail.com
            </List.Header>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default ResumeCard;