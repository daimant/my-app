'use strict';
import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return (
    <div className={classes.content}>
    <div>
      <img src="https://sun9-1.userapi.com/c628722/v628722601/29ec1/ZtxKFBcpYdk.jpg"/>
    </div>
    <div>
      <img src="https://sun9-1.userapi.com/c836224/v836224051/56020/nBQdY4_8tD0.jpg"/>
       descr
    </div>
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <MyPosts />
    </div>
  </div>
  )
}

export default Profile;