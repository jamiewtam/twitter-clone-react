import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleNewTweet } from "../actions/tweetActions";

const SubmitTweet = (props) => {
  const author = useSelector((state) => state.authedUser);
  const [textArea, setTextArea] = React.useState("");
  const [submit, setSubmit] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };
  // If props of replying to then set it to true.

  const submitTweet = (e) => {
    e.preventDefault();
    if (props.replyingTo) {
      dispatch(
        handleNewTweet({
          author,
          text: textArea,
          replyingTo: props.replyingTo,
        })
      );
    } else {
      dispatch(
        handleNewTweet({
          author,
          text: textArea,
        })
      );
    }

    setSubmit(true);
  };

  if (submit) {
    return <Redirect to="/" />;
  }

  return (
    <form className="new-tweet-container">
      <textarea
        type="textarea"
        placeholder="What's happening?"
        rows="5"
        cols="70"
        value={textArea}
        onChange={handleChange}
      />
      <button onClick={submitTweet} className="new-tweet-button">
        Submit Tweet
      </button>
    </form>
  );
};

export default SubmitTweet;
