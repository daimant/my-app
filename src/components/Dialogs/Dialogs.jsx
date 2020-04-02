import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = props => {
  let state = props.dialogsPage;

  let dialogElement = state.dialogsData.map(d => (
    <DialogItem name={d.name} key={d.id} />
  ));
  let messageElement = state.messagesData.map(m => (
    <Message message={m.message} />
  ));

  const addNewMessage = values => {
    props.sendMessageCreator(values.newMessageBody);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <h4>Диалоги</h4>
        {dialogElement}
      </div>
      <div className={classes.messages}>
        <div>{messageElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Введите сообщение"
          validate={[required, maxLength50]}
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
