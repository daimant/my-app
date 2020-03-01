let initialStore = [
  { link: "/profile", text: "Профиль" },
  { link: "/friends", text: "Друзья" },
  { link: "/dialogs", text: "Сообщения" },
  { link: "/music", text: "Музыка" },
  { link: "/news", text: "Новости" },
  { link: "/settings", text: `Настройки` }
];
const navigationsReducer = (state = initialStore, action) => {
  return state;
};

export default navigationsReducer;
