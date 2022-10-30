import React from "react";
import Post from "../Post/Post";
import Share from "../share/Share";
import "./feed.css";
function Feed() {
  return (
    <div className="feedback">
      <Share />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
