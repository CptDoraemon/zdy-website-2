import { cloneDeep } from 'lodash';

export const types = {
  range: 'range',
  single: 'single',
  multiple: 'multiple'
};

/**
 * @typedef {{
 *   displayName: string,
 *   internalName: string,
 * }} Choice
 */
/**
 * @typedef {{
 *   title: string,
 *   type: string,
 *   choices: Choice[]
 *   original: Choice[],
 *   active: Choice[],
 *   pending: Choice[],
 *   validationMessage: string,
 * }} FilterState
 */
/**
 * @param {string} title
 * @param {string} internalName
 * @param {string} type
 * @param {Choice[]} choices
 * @param {Choice[]} original
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

const getOptionObject = (displayName, internalName) => ({
  displayName,
  internalName
});

const getRangeFilter = (title, internalName, min, max) => {
  return getBaseFilterObj(title, internalName, types.range, [getOptionObject(min), getOptionObject(max)], [getOptionObject(min), getOptionObject(max)]);
};

/**
 * @param {Choice[]} choices
 * @param {Choice[]} original
 */
const getSingleFilter = (title, internalName, choices, original) => {
  return getBaseFilterObj(title, internalName, types.single, choices, original)
};

/**
 * @param {Choice[]} choices
 * @param {Choice[]} original
 */
const getMultipleFilter = (title, internalName, choices, original) => {
  return getBaseFilterObj(title, internalName, types.multiple, choices, original)
};

const mockChoice = new Array(15).fill('1').map((_, i) => `choice${i+1}`);
const defaultFilters = [
  getRangeFilter('age', 'age', 1, 100),
  getSingleFilter(
    'sex',
    'sex',
    [
      getOptionObject('male', '1'),
      getOptionObject('female', '2'),
    ],
    [
      getOptionObject('male', '1'),
      getOptionObject('female', '2'),
    ]),
  getMultipleFilter(
    'severity',
    'severity',
    [
      getOptionObject('1', '1'),
      getOptionObject('2', '2'),
      getOptionObject('3', '3'),
    ],
    [
      getOptionObject('1', '1'),
      getOptionObject('3', '3'),
    ])
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
