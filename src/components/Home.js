import React from "react";
import { useSelector } from "react-redux";
import Tweet from "../elements/Tweet";

const Home = () => {
  const tweets = useSelector((state) => state.tweets);
  const users = useSelector((state) => state.users);

  const sortedTweets = Object.values(tweets.tweets).sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  return (
    <div>
      {sortedTweets.map((tweet) => {
        return (
          <div key={tweet.id} className="tweet-container">
            <Tweet tweet={tweet} users={users.users} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
