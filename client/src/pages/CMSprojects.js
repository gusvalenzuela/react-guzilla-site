import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Projects() {
  // Setting our component's initial state
  const [projects, setProjects] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Projects and store them with setProjects
  useEffect(() => {
    loadProjects()
  }, [])

  // Loads all Projects and sets them to Projects
  function loadProjects() {
    API.getProjects()
      .then(res => 
        setProjects(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Project from the database with a given id, then reloads Projects from the db
  function deleteProject(id) {
    API.deleteProject(id)
      .then(res => loadProjects())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveProject method to save the Project data
  // Then reload Projects from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveProject({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadProjects())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {projects.length ? (
              <List>
                {projects.map(Project => (
                  <ListItem key={Project._id}>
                    <Link to={"/projects/" + Project._id}>
                      <strong>
                        {Project.title} by {Project.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteProject(Project._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Projects;
