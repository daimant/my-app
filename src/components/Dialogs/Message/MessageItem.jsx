import classes from "./Message.module.css";
import React from "react";

const MessageItem = ({ message, id }) => {
  return (
    <div className={classes.message} key={id}>
      {message}
    </div>
  );
};

export default MessageItem;
