import { INITIAL_DATA, NEW_TWEET } from "../actions/tweetActions";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return {
        users: action.users,
      };
    case NEW_TWEET:
      return {
        ...state,
        users: {
          ...state.users,
          [action.newTweet.author]: {
            ...state.users[action.newTweet.author],
            tweets: state.users[action.newTweet.author].tweets.concat(
              action.newTweet
            ),
          },
        },
      };

    default:
      return state;
  }
};

export default userReducer;
