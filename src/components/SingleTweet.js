import React from "react";
import Tweet from "../elements/Tweet";
import NewTweet from "../elements/NewTweet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleTweet = (props) => {
  // Get the id from the params.
  const { id } = useParams();
  // Get the twee from the state.
  const allTweets = useSelector((state) => state.tweets);
  const tweet = allTweets.tweets[id];
  const users = useSelector((state) => state.users);

  //
  return (
    <div className="tweet-container">
      <Tweet tweet={tweet} users={users.users} />
      <NewTweet replyingTo={id} />
      {tweet.replies.map((replyTweet) => {
        return (
          <Tweet
            key={replyTweet}
            tweet={allTweets.tweets[replyTweet]}
            users={users.users}
          />
        );
      })}
    </div>
  );
};

export default SingleTweet;
