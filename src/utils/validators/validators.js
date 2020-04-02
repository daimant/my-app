export const required = value => {
  if (value) return undefined;
  return "Поле обязательно для заполнения";
};

export const maxLengthCreator = maxLength => value => {
  if (value.length > maxLength)
    return `Максимальная длинна ${maxLength} символов`;
  return undefined;
};
