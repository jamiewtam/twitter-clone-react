import { INITIAL_DATA, NEW_TWEET } from "../actions/tweetActions";

const tweetReducer = (state = [], action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        tweets: action.tweets,
      };
    case NEW_TWEET:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          [action.newTweet.id]: action.newTweet,
        },
      };
    default:
      return state;
  }
};

export default tweetReducer;
