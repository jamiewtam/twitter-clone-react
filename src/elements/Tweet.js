import React from "react";

import { FaHeart, FaReply } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleLike } from "../actions/tweetActions";

const Tweet = ({ tweet, users }) => {
  const dispatch = useDispatch();
  const allTweets = useSelector((state) => state.tweets);
  const currentUser = useSelector((state) => state.authedUser);

  const { text, timestamp, likes, replyingTo, replies, id } = tweet;

  let replyingToText = null;
  if (replyingTo) {
    replyingToText = `Replying to @${allTweets.tweets[replyingTo].author}`;
  }

  const { avatarURL, name } = users[tweet.author];

  const isLikedByUser = !!likes.find((likedUser) => {
    return likedUser === currentUser;
  });

  const handleLikeFromPage = (e) => {
    e.preventDefault();
    console.log("running");
    dispatch(
      handleLike({
        id,
        authedUser: currentUser,
        hasLiked: isLikedByUser,
      })
    );
  };

  return (
    <Link to={`/tweet/${id}`}>
      <div className="border-container">
        <img className="tweet-user-image" src={avatarURL} alt={name} />
        <div className="tweet-user-elements">
          <div className="tweet-user-name">{name}</div>
          <div className="tweet-date">
            {new Date(timestamp).toLocaleDateString()}
          </div>
          <div className="tweet">{replyingToText}</div>
          <div className="tweet-tweet">{text}</div>
          <div className="tweet-icons">
            <FaReply size="30px" style={{ paddingRight: "5px" }} />{" "}
            {replies ? replies.length : 0}
            &nbsp;
            <button className="tweet-like-button" onClick={handleLikeFromPage}>
              {isLikedByUser ? (
                <FaHeart
                  size="30px"
                  color="#E0245E"
                  style={{ paddingRight: "5px" }}
                />
              ) : (
                <FaHeart
                  size="30px"
                  color="white"
                  style={{ paddingRight: "5px" }}
                />
              )}
            </button>
            {likes ? likes.length : 0}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
