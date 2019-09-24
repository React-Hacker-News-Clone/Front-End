import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCHING_STORIES_START = "FETCHING_STORIES_START";
export const FETCHING_STORIES_SUCCESS = "FETCHING_STORIES_SUCCESS";
export const FETCHING_STORIES_FAILURE = "FETCHING_STORIES_FAILURE";
export const DELETE_STORY = "DELETE_STORY";

export const getStories = () => dispatch => {
  dispatch({ type: FETCHING_STORIES_START });
  axiosWithAuth()
    .get("https://francoiscoding-hackernews-node.herokuapp.com/stories")
    .then(res => {
      console.log("Stories Data: ", res.data);
      dispatch({ type: FETCHING_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("Error: ", err.data);
      dispatch({ type: FETCHING_STORIES_FAILURE, payload: err.data });
    });
};

export const deleteStory = id => dispatch => {
  axiosWithAuth().delete(
    `https://francoiscoding-hackernews-node.herokuapp.com/stories/${id}`
  );
  dispatch({ type: DELETE_STORY, payload: id });
};
