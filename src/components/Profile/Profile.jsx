import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfInfo from "./ProfInfo/ProfInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <div>
      <ProfInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
