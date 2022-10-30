import React from "react";
import "./CloseFriend.css";
function CloseFriend({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.name}</span>
    </li>
  );
}

export default CloseFriend;
