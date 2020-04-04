import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

// работает только с классовой компонентой, нужно выпиливать хуки
describe("ProfileStatus component", () => {
  test("Status from props should be in the state", () => {
    // const component = create(<ProfileStatus status='social-network'/>);
    // const instance = component.getInstance();
    // expect(instance.state.status).toBe('social-network')
  });
  test("After creation span should be displayed", () => {
    // const component = create(<ProfileStatus status='social-network'/>);
    // const root = component.root();
    // const span = root.findByType('span');
    // expect(span.length).toBe(1);
  });
});
