import React from "react";
import ReactDOM from "react-dom";
import AppSocialNetwork from "./App";

test("renders learn react link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppSocialNetwork />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders learn react link", () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
