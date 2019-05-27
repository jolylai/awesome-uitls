import flatten from "./flatten";

const difference = (array, ...values) => {
  const _values = flatten(values);
  return array.filter(value => !_values.includes(value));
};

export default difference;
