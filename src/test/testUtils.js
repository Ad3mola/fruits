/**
 * Return node(s) with given data-test attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper function
 * @param {string} value  - Value of data-test attribute
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
