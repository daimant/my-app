import profileReducer, {
  addPostActionCreator,
  deletePost
} from "./profile-reducer";
import React from "react";

let state = {
  postsData: [
    {
      id: 1,
      message: "hello, how u feel?",
      img: "https://clck.ru/MDDf7",
      likeCounts: 0
    },
    {
      id: 2,
      message: "where my money?",
      img: "https://clck.ru/MDDgs",
      likeCounts: 95
    },
    {
      id: 3,
      message: "i need help",
      img: "https://clck.ru/MDDj5",
      likeCounts: 110
    },
    {
      id: 4,
      message: "i want use props",
      img: "https://clck.ru/MDDid",
      likeCounts: 11
    }
  ]
};

test("length of posts should be increment", () => {
  let action = addPostActionCreator("test");
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(5);
});
test("message of posts should be correct", () => {
  let action = addPostActionCreator("test");
  let newState = profileReducer(state, action);
  expect(newState.postsData[4].message).toBe("test");
});
test("after deleting length should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(3);
});
test("after deleting length should`t be decrement if id is incorrect", () => {
  let action = deletePost(100);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});
