import React from "react";
import "./profile.css";
import Topbar from "../../component/Topbar/topbar";
import pic from "../../component/img1.jpg";

import Sidebar from "../../component/sidebar/sidebar";

import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightBar/Right";
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={pic} alt="" />
              <img className="profileUserImg" src={pic} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
