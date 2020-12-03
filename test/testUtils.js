import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`); //<=Notice that val is in quotes
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "props",
    component.name
  );
  expect(propError).toBeUndefined();
};
