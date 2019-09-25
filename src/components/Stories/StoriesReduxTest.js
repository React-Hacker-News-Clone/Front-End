import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStories } from "../../store/actions";
import StoriesCard from "./StoriesCard";
import styled from "styled-components";

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

const StoriesReduxTest = ({ getStories, stories }) => {
  useEffect(() => {
    getStories();
  }, [getStories]);

  return (
    <Container>
      <StoryBox>
        {/* <StoriesCard /> */}
        {/* {story.slice(0, 5).map(item => { <--this will only display 5 cards  */}
        {stories.map(item => {
          return (
            <StoriesCard
              key={item.storyid}
              title={item.title}
              url={item.url}
              id={item._id}
            />
          );
        })}
      </StoryBox>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.stories,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getStories }
)(StoriesReduxTest);
