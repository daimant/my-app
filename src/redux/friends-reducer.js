let initialStore = [
  { id: 1, name: "Андрей", age: 29 },
  { id: 2, name: "Валера", age: 30 },
  { id: 3, name: "Люся", age: 79 },
  { id: 4, name: "Саня", age: 29 },
  { id: 5, name: "Катя", age: 24 },
  { id: 6, name: "Володя", age: 59 }
];

const friendsReducer = (state = initialStore, action) => {
  return state;
};

export default friendsReducer;
