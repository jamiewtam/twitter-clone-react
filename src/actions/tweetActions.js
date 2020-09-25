import { getInitialData, saveTweet, saveLikeToggle } from "../utils/api";
import setAuthedUser from "./authedUser";

export const INITIAL_DATA = "INITIAL_DATA";
export const NEW_TWEET = "NEW_TWEET";
export const NEW_LIKE = "NEW_LIKE";

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

const renderNewLike = (newLike) => {
  return {
    type: NEW_LIKE,
    newLike,
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

export const handleLike = (likedData) => {
  return (dispatch) => {
    dispatch(renderNewLike(likedData));
    saveLikeToggle(likedData).catch((err) => {
      console.warn("Error in handleToggleTweet: ", err);
      dispatch(renderNewLike(likedData));
      alert("The was an error liking the tweet. Try again.");
    });
  };
};
