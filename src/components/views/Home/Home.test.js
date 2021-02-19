import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import Home from "./Home";

/**
 * Factory function to create a ShallowWrapper for App Component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Home {...props} />);
};

describe("there is data passed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders without error", () => {
    const HomeComponent = findByTestAttr(wrapper, "home-component");
    expect(HomeComponent.length).toBe(1);
  });
  test("fruit container shows", () => {
    const fruitContainer = findByTestAttr(wrapper, "fruit-container");
    expect(fruitContainer.length).toBe(1);
  });
});
