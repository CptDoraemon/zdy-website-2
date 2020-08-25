import React from "react";
import FilterRange from "./filter-range";
import FilterSingle from "./filter-single";
import FilterMultiple from "./filter-multiple";

const types = {
  range: 'range',
  single: 'single',
  multiple: 'multiple'
};

/**
 * @callback updatePendingFilter
 * @param {string} title
 * @param {*[]} pending
 */
/**
 * @param {Object} filter
 * @param {updatePendingFilter} updatePendingFilter
 */
const Filter = ({filter, updatePendingFilter}) => {
  const props = {filter, updatePendingFilter};
  switch (filter.type) {
    case types.range:
      return <FilterRange {...props} />;
    case types.single:
      return <FilterSingle {...props} />;
    case types.multiple:
      return <FilterMultiple {...props} />;
    default:
      return 'unknown filter'
  }
};

export default Filter
