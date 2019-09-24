import React, { useState, useEffect } from "react";
import axios from "axios";
import StoriesCard from "./StoriesCard";
import styled from "styled-components";
// import PageTab from "./PageTab/PageTab";

//styling below

const Container = styled.div`
  display: flex;
  //flex-direction: column;
  justify-content: center;
  margin-top: 1.5rem;
  //border: 2px solid red;
`;

const StoryBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //border: 2px solid black;
`;

//function below

function Stories() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    axios
      .get("https://francoiscoding-javabackend.herokuapp.com/stories/stories")
      .then(res => {
        console.log("Stories Data: ", res.data);
        setStory(res.data);
        //console.log("STORY: ", story)
      })
      .catch(err => {
        console.log("Stories.js Error with story pull: ", err);
      });
  }, []);

  return (
    <div>
      <Container>
        <StoryBox>
          {/* <StoriesCard /> */}
          {/* {story.slice(0, 5).map(item => { <--this will only display 5 cards  */}
          {story.slice(0, 5).map(item => {
            return (
              <StoriesCard
                key={item.storyid}
                title={item.title}
                url={item.url}
              />
            );
          })}
          {story.slice(6, 11).map(item => {
            return (
              <StoriesCard
                key={item.storyid}
                title={item.title}
                url={item.url}
              />
            );
          })}
        </StoryBox>
      </Container>
      {/* <PageTab /> */}
    </div>
  );
}

export default Stories;
