'use strict';

import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  
  let dialogElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElement = props.state.messagesData.map(m => <Message message={m.message}/>);
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <h4>Диалоги</h4>
        {dialogElement}
      </div>
      <div className={classes.messages}>
        {messageElement}
      </div>
    </div>
  )
};

export default Dialogs;