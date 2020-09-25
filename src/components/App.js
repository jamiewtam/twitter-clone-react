import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import NewTweet from "./NewTweet";
import SingleTweet from "./SingleTweet";

import { handleInitialData } from "../actions/tweetActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  //Get the initial data
  React.useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/newTweet" component={NewTweet} />
        <Route path="/tweet/:id" component={SingleTweet} />
      </div>
    </Router>
  );
}

export default App;
