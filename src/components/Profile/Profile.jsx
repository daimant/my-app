import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = props => {
  return (
    <div>
      <ProfInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
