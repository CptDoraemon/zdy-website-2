import { cloneDeep } from 'lodash';

const types = {
  range: 'range',
  single: 'single',
  multiple: 'multiple'
};

const getBaseFilterObj = (title, type, choices, original) => {
  const copy = (value) => {
    return Array.isArray(value) ? value : value.slice()
  };

  return {
    title,
    type,
    choices: copy(choices),
    original: copy(original),
    active: copy(original),
    pending: copy(original),
    validationMessage: ''
  }
};

const getRangeFilter = (title, min, max) => {
  return getBaseFilterObj(title, types.range, [min, max], [min, max]);
};

/**
 * @param {string[]} choices
 * @param {string[]} original
 */
const getSingleFilter = (title, choices, original) => {
  return getBaseFilterObj(title, types.single, choices, original)
};

/**
 * @param {string[]} choices
 * @param {string[]} original
 */
const getMultipleFilter = (title, choices, original) => {
  return getBaseFilterObj(title, types.multiple, choices, original)
};


const defaultFilters = [
  getRangeFilter('range filter', 100, 200),
  getSingleFilter('single filter', ['choice1', 'choice2', 'choice3'], ['choice2']),
  getMultipleFilter('multiple filter', ['choice1', 'choice2', 'choice3', 'choice4'], ['choice2', 'choice4'])
];

const defaultFilterState = {
  active: cloneDeep(defaultFilters),
  pending: cloneDeep(defaultFilters),
  isPendingApplicable: false,
  isResettable: false
};

export default defaultFilterState
