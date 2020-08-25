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
 * @param {Object} filter
 */
const Filter = ({filter}) => {
  switch (filter.type) {
    case types.range:
      return <FilterRange filter={filter}/>;
    case types.single:
      return <FilterSingle filter={filter}/>;
    case types.multiple:
      return <FilterMultiple filter={filter}/>;
    default:
      return 'unknown filter'
  }
};

export default Filter
