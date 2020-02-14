'use strict';
import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return <div>
    <div className={classes.posts}>
      <Post message="hello, how u feel?"
            img="https://clck.ru/MDDf7"
            likeCounts="0"/>
      <Post message="where my money?"
            img='https://clck.ru/MDDgs'
            likeCounts="95"/>
      <Post message="i need help"
            img="https://clck.ru/MDDj5"
            likeCounts="110"/>
      <Post message="i want use props"
            img="https://clck.ru/MDDid"
            likeCounts="11"
      />
    </div>
  </div>
}

export default MyPosts;