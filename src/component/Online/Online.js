import React from "react";
import "./Online.css";
import { Users } from "../../pages/dummyData";
export default function Online() {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={Users[0].profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{Users[0].name}</span>
    </li>
  );
}
