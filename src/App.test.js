import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "./test/testUtils";
import App from "./App";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});
