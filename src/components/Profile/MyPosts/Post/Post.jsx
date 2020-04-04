import React from "react";
import classes from "./Post.module.css";
import defaultProfilePicture from "../../../../assets/images/user.png";

const Post = ({ img, message, likeCounts, id }) => {
  return (
    <div className={classes.item} key={id}>
      <img src={img} alt={defaultProfilePicture} />
      {message}
      <div>
        <span>{likeCounts} лайков</span>
      </div>
    </div>
  );
};

export default Post;
