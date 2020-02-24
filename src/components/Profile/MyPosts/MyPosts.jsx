'use strict';
import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
  
  let postsElement = props.state.map(p => <Post message={p.message} img={p.img} likeCounts={p.likeCounts}/>);
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };
  
  return (
    <div className={classes.postsBlock}>
      <div>
        <h3> My posts </h3>
        <div>
          <div>
            <textarea ref={newPostElement}></textarea>
          </div>
          <div>
            <button onClick={addPost}> Add post</button>
          </div>
        </div>
      
      </div>
      <div className={classes.posts}>
        {postsElement}
      </div>
    </div>
  )
};

export default MyPosts;