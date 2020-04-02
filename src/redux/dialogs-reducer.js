const SEND_MESSAGE = "SEND_MESSAGE";

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
  ]
};

const dialogsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});

export default dialogsReducer;
