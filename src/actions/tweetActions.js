import { getInitialData, saveTweet } from "../utils/api";
import setAuthedUser from "./authedUser";

export const INITIAL_DATA = "INITIAL_DATA";
export const NEW_TWEET = "NEW_TWEET";

const renderInitialData = (data) => {
  return {
    type: INITIAL_DATA,
    users: data.users,
    tweets: data.tweets,
  };
};

const renderNewTweet = (newTweet) => {
  return {
    type: NEW_TWEET,
    newTweet,
  };
};

const AUTHED_ID = "tylermcginnis";

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then((data) => {
      dispatch(renderInitialData(data));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};

export const handleNewTweet = (newTweetData) => {
  return (dispatch) => {
    saveTweet(newTweetData).then((newTweet) => {
      dispatch(renderNewTweet(newTweet));
    });
  };
};
