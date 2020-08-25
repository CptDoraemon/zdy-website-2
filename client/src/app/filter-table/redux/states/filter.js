import { cloneDeep } from 'lodash';

export const types = {
  range: 'range',
  single: 'single',
  multiple: 'multiple'
};

/**
 * @typedef {{
 *   title: string,
 *   type: string,
 *   choices: *[]
 *   original: *[],
 *   active: *[],
 *   pending: *[],
 *   validationMessage: string,
 * }} FilterState
 */
/**
 * @param {string} title
 * @param {string} type
 * @param {*[]} choices
 * @param {*[]} original
 * @returns {FilterState}
 */
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

const mockChoice = new Array(15).fill('1').map((_, i) => `choice${i+1}`);
const defaultFilters = [
  getRangeFilter('range filter', 100, 200),
  getSingleFilter('single filter', mockChoice, ['choice2']),
  getMultipleFilter('multiple filter', mockChoice, ['choice2'])
];

/**
 * @typedef {{
 *  filter: FilterState[],
 *  isPendingApplicable: boolean,
 *  isResettable: boolean
 * }} DefaultFilterState
 */
/**
 * @type {DefaultFilterState}
 */
const defaultFilterState = {
  filter: cloneDeep(defaultFilters),
  isPendingApplicable: false,
  isResettable: false
};

export default defaultFilterState
