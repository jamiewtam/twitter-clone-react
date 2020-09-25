import { INITIAL_DATA } from "../actions/tweetActions";

const loading = (state = true, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return false;
    default:
      return state;
  }
};

export default loading;
