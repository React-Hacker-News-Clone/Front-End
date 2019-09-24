import { FETCHING_STORIES_START, FETCHING_STORIES_SUCCESS } from "../actions";

const initialState = {
  stories: [],
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
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
        isFetching: false,
        stories: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
