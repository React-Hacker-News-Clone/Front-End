import React, { useState } from "react";
import { ButtonContainer } from "../Styles/LoginStyles";

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
    <div className="submit">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="submitForm">
          <p className="submitInputs">
            <label style={{ fontWeight: "bold" }}>Title</label>
            <input
              placeholder="Story Title ..."
              autoComplete="off"
              type="text"
              name="title"
              value={newStory.title}
              onChange={evt => handleChange(evt)}
            />
          </p>
          <p className="submitInputs">
            <label style={{ fontWeight: "bold" }}>Story Url</label>
            <input
              placeholder="Url to Story ..."
              type="text"
              name="story"
              value={newStory.story}
              onChange={evt => handleChange(evt)}
            />
          </p>

          <ButtonContainer>Submit</ButtonContainer>
        </form>
      </div>
      <img
        src="https://i.imgur.com/dpCLfLO.jpg"
        alt="Mysterious Hacker"
        className="submitImage"
      />
    </div>
  );
};

export default StoryPostForm;
