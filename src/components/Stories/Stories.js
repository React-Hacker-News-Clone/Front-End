import React, { useState, useEffect } from "react";
import axios from "axios";
import StoriesCard from "./StoriesCard";
import styled from "styled-components";
import Pagination from "./Pagination";
import LoadingScreen from "react-loading-screen";

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
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://francoiscoding-javabackend.herokuapp.com/stories/stories"
      );
      setStory(res.data);
    };

    fetchPosts();
  }, []);
  setTimeout(() => {
    setLoading(false);
  }, 900);

  // Get current posts
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = story.slice(indexOfFirstStory, indexOfLastStory);

  // Change Page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  console.log(story);

  return (
    <div>
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#f1f1f1"
          textColor="#676767"
          text="Loading Stories ..."
          spinnerColor="#9ee5f8"
        >
          <StoryBox>
            {/* <StoriesCard /> */}
            {currentStories.map(item => {
              return (
                <StoriesCard
                  key={item.storyid}
                  title={item.title}
                  url={item.url}
                  id={item.storyid}
                />
              );
            })}
          </StoryBox>
        </LoadingScreen>
      </Container>
      <Pagination
        storiesPerPage={storiesPerPage}
        totalStories={story.length}
        paginate={paginate}
      />
      {/* <PageTab /> */}
    </div>
  );
}

export default Stories;
