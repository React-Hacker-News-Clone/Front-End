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

  const createStory = evt => {
    evt.preventDefault();
    const newStoryToAdd = {
      ...newStory
    };
    console.log("inputed story", newStoryToAdd);
    axiosWithAuth()
      .post(
        "https://francoiscoding-hackernews-node.herokuapp.com/stories",
        newStoryToAdd
      )
      .then(props.history.push("/stories"));
  };

  return (
    <div className="post-story">
      <h2>Post a story</h2>
      <Form onSubmit={createStory}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={newStory.title}
            onChange={evt => handleChange(evt)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicStory">
          <Form.Label>Story</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
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
