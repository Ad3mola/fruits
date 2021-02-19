import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import Search from "./Search";

/**
 * Factory function to create a ShallowWrapper for App Component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Search />);
};

describe("render", () => {
  describe("nothing has been searched for", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    test("renders without error", () => {
      const InputComponent = findByTestAttr(wrapper, "input-component");
      expect(InputComponent.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.length).toBe(1);
    });
  });
});
