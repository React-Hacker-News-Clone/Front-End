import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getStories } from "../../store/actions";
import UserStoriesCard from "./UserStoriesCard";
import styled from "styled-components";
import LoadingScreen from "react-loading-screen";
import "./UserStories.css";

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

const UserStories = ({ getStories, stories }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getStories();
  }, [getStories]);

  setTimeout(() => {
    setLoading(false);
  }, 900);
  return (
    <>
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#f1f1f1"
          textColor="#676767"
          text="Loading Stories ..."
          spinnerColor="#9ee5f8"
        >
          <StoryBox>
            {stories.map(item => {
              return (
                <UserStoriesCard
                  key={item.storyid}
                  title={item.title}
                  story={item.story}
                  id={item._id}
                />
              );
            })}
          </StoryBox>
        </LoadingScreen>
      </Container>
      <div className="contactBtn">Contact Us</div>
    </>
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
)(UserStories);
