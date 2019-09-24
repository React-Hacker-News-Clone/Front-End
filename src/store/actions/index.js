import axios from "axios";

export const FETCHING_STORIES_START = "FETCHING_STORIES_START";
export const FETCHING_STORIES_SUCCESS = "FETCHING_STORIES_SUCCESS";
export const FETCHING_STORIES_FAILURE = "FETCHING_STORIES_FAILURE";

export const getStories = () => dispatch => {
  dispatch({ type: FETCHING_STORIES_START });
  axios
    .get("https://francoiscoding-hackernews-node.herokuapp.com/stories/stories")
    .then(res => {
      dispatch({ type: FETCHING_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_STORIES_FAILURE, payload: err.data });
    });
};
