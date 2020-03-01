import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogElement = state.dialogsData.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElement = state.messagesData.map(m => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessageCreator();
  };
  let onNewMessageChange = el => {
    let body = el.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <h4>Диалоги</h4>
        {dialogElement}
      </div>
      <div className={classes.messages}>
        <div>{messageElement}</div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeHolder="Введите сообщение"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
