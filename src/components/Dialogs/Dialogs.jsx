'use strict';

import React from 'react';
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  
  let dialogElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messageElement = props.state.messagesData.map(m => <Message message={m.message}/>);
  let addMessageElement = React.createRef();
  let addMessage = () => {
    let text = addMessageElement.current.value;
    alert(text);
  };
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <h4>Диалоги</h4>
        {dialogElement}
      </div>
      <div className={classes.messages}>
        {messageElement}
        <textarea ref={addMessageElement}>Введите сообщение</textarea>
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  )
};

export default Dialogs;