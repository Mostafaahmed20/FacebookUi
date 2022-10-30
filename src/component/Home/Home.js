import React from "react";
import Feed from "../feed/feed";
import Rightbar from "../rightBar/Right";
import pic from "../img1.jpg";
import Sidebar from "../sidebar/sidebar";
import Topbar from "../Topbar/topbar";
import "./Home.css";
import Profile from "../../pages/Profile/Profile";
let data = [
  { id: 1, name: "ali-ahmed", profilePicture: pic },
  { id: 2, name: "mohamed-ahmed", profilePicture: pic },
  { id: 1, name: "shady-ahmed", profilePicture: pic },
];
function Home() {
  return (
    <div>
      <Profile />
    </div>
  );
}

export default Home;
