import { INITIAL_DATA, NEW_TWEET, NEW_LIKE } from "../actions/tweetActions";

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
    case NEW_LIKE:
      return {
        ...state,
        tweets: {
          ...state.tweets,
          [action.newLike.id]: {
            ...state.tweets[action.newLike.id],
            likes:
              action.newLike.hasLiked === true
                ? state.tweets[action.newLike.id].likes.filter(
                    (uid) => uid !== action.newLike.authedUser
                  )
                : state.tweets[action.newLike.id].likes.concat(
                    action.newLike.authedUser
                  ),
          },
        },
      };
    default:
      return state;
  }
};

export default tweetReducer;
