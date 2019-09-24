import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axiosWithAuth from "../../utils/axiosWithAuth";
import "./StoryPostForm.css";

const StoryPostForm = props => {
  const [newStory, setNewStory] = useState({
    title: "",
    story: ""
  });

  const handleChange = evt => {
    setNewStory({ ...newStory, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newStoryToAdd = {
      ...newStory
    };
    console.log("Story input: ", newStoryToAdd);
    axiosWithAuth()
      .post(
        "https://francoiscoding-hackernews-node.herokuapp.com/stories",
        newStoryToAdd
      )
      .then(props.history.push("/usernews"));
  };

  return (
    <div className="post-story">
      <h2>Submit a story</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newStory.title}
            onChange={evt => handleChange(evt)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicTitle">
          <Form.Label>URL</Form.Label>
          <Form.Control
            type="text"
            name="story"
            value={newStory.story}
            onChange={evt => handleChange(evt)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StoryPostForm;
