import {
  FETCHING_STORIES_START,
  FETCHING_STORIES_SUCCESS,
  DELETE_STORY
} from "../actions";

const initialState = {
  stories: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STORIES_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_STORIES_SUCCESS:
      return {
        ...state,
        stories: action.payload,
        isFetching: false
      };
    case DELETE_STORY:
      const newStories = state.stories.filter(
        story => story.id !== action.payload
      );
      return {
        ...state,
        stories: newStories
      };
    default:
      return state;
  }
};
