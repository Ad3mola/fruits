import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "./test/testUtils";
import App from "./App";

/**
 * Factory function to create a ShallowWrapper for App Component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "app-component");
  expect(appComponent.length).toBe(1);
});
