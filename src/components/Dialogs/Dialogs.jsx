import React from "react";
import classes from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

class Dialogs extends React.Component {
  render() {
    let state = this.props.dialogsPage;

    let dialogElement = state.dialogsData.map((d, i) => (
      <DialogItem name={d.name} id={d.id} key={i} />
    ));
    let messageElement = state.messagesData.map((m, i) => (
      <MessageItem message={m.message} id={m.id} key={i} />
    ));

    const addNewMessage = values => {
      this.props.sendMessageCreator(values.newMessageBody);
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
  }
}

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
