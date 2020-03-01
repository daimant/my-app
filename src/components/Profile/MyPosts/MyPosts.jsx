import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostCreator,
  updateNewPostTextCreator
} from "../../../redux/profile-reducer";

const MyPosts = props => {
  let postsElement = props.postsData.map(p => (
    <Post message={p.message} img={p.img} likeCounts={p.likeCounts} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <div>
        <h3> My posts </h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
          </div>
          <div>
            <button onClick={onAddPost}> Add post</button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
