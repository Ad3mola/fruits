import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../test/testUtils";
import Card from "./Card";

/**
 * Factory function to create a ShallowWrapper for App Component
 * @function setup
 * @param {object} props  - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Card {...props} />);
};

describe("if there is no data passed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({});
  });

  test("renders without error", () => {
    const CardComponent = findByTestAttr(wrapper, "card-component");
    expect(CardComponent.length).toBe(1);
  });
  test("no recipe text shows", () => {
    const recipeContainer = findByTestAttr(wrapper, "recipe-container");
    expect(recipeContainer.text()).toContain("no recipes here");
  });
});

describe("if there is data passed", () => {
  let wrapper;

  let data = {
    id: 1,
    name: "ginger",
    recipes: ["strawberry", "lemon"],
    is_allergen: false,
    collection: "smoothies",
  };

  beforeEach(() => {
    wrapper = setup({ ...data });
  });

  test("renders without error", () => {
    const CardComponent = findByTestAttr(wrapper, "card-component");
    expect(CardComponent.length).toBe(1);
  });

  test("renders fruit name", () => {
    const fruitName = findByTestAttr(wrapper, "fruit-name");
    expect(fruitName.length).toBe(1);
  });
  test("renders list of recipes", () => {
    const recipeContainer = findByTestAttr(wrapper, "recipe-container");
    expect(recipeContainer.text()).not.toContain("no recipes here");
  });
});
