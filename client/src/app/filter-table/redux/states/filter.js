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
 * @param {string} internalName
 * @param {string} type
 * @param {*[]} choices
 * @param {*[]} original
 * @returns {FilterState}
 */
const getBaseFilterObj = (title, internalName, type, choices, original) => {
  const copy = (value) => {
    return Array.isArray(value) ? value : value.slice()
  };

  return {
    title,
    internalName,
    type,
    choices: copy(choices),
    original: copy(original),
    active: copy(original),
    pending: copy(original),
    validationMessage: ''
  }
};

const getRangeFilter = (title, internalName, min, max) => {
  return getBaseFilterObj(title, internalName, types.range, [min, max], [min, max]);
};

/**
 * @param {string[]} choices
 * @param {string[]} original
 */
const getSingleFilter = (title, internalName, choices, original) => {
  return getBaseFilterObj(title, internalName, types.single, choices, original)
};

/**
 * @param {string[]} choices
 * @param {string[]} original
 */
const getMultipleFilter = (title, internalName, choices, original) => {
  return getBaseFilterObj(title, internalName, types.multiple, choices, original)
};

const mockChoice = new Array(15).fill('1').map((_, i) => `choice${i+1}`);
const defaultFilters = [
  getRangeFilter('range filter', 'rangeFilter', 100, 200),
  getSingleFilter('single filter', 'singleFilter', mockChoice, ['choice1']),
  getMultipleFilter('multiple filter 1', 'multipleFilter1', mockChoice, ['choice5']),
  getMultipleFilter('multiple filter 2', 'multipleFilter2', mockChoice, ['choice1', 'choice2'])
];

/**
 * @typedef {{
 *  filter: FilterState[],
 *  isPendingApplicable: boolean,
 *  isResettable: boolean,
 *  dropdown: boolean
 * }} DefaultFilterState
 */
/**
 * @type {DefaultFilterState}
 */
const defaultFilterState = {
  filter: cloneDeep(defaultFilters),
  isPendingApplicable: false,
  isResettable: false,
  dropdown: false
};

export default defaultFilterState
