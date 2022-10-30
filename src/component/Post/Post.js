import React, { useState } from "react";
import pic from "../img1.jpg";

import "./Post.css";
import { Users, Posts } from "../../pages/dummyData";
import { More, MoreVert } from "@mui/icons-material";
// import { MoreVertOutlined } from "@mui/icons-material";
function Post() {
  const [like, setLike] = useState(Posts[0].like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : parseInt(like) + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={pic} alt="" />
            <span className="postUsername">
              {/* {
                Users.filter((u) => u.id === Posts.id && Posts.userId)[0]
                  .username
              } */}
            </span>
            <span className="postDate">{Posts[0].date}</span>
          </div>
          <div className="postTopRight">
            <More />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{Posts && Posts[0].desc}</span>
          <img className="postImg" src={Posts[0].photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={pic} onClick={likeHandler} alt="" />
            <img
              className="likeIcon"
              src={pic}
              onClick={() => setLike(like + 1)}
              alt=""
            />
            <span className="postLikeCounter"> {like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{Posts[0].comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
