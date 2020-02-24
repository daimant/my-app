'use strict';
import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts'
import ProfInfo from './ProfInfo/ProfInfo'

const Profile = (props) => {
  return (
    <div>
      <ProfInfo/>
      <MyPosts state={props.state.postsData} addPost={props.addPost}/>
    </div>
  )
};

export default Profile;