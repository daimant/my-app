const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let initialStore = {
  dialogsData: [
    { id: 1, name: "Андрей" },
    { id: 2, name: "Валера" },
    { id: 3, name: "Люся" },
    { id: 4, name: "Женя" },
    { id: 5, name: "Катя" },
    { id: 6, name: "Володя" }
  ],
  messagesData: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Yo" },
    { id: 2, message: "Как дела" },
    { id: 3, message: "Привет" },
    { id: 3, message: "Что делаешь?" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
});
export default dialogsReducer;
