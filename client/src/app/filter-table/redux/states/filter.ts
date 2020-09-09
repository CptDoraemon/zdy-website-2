import { cloneDeep } from 'lodash';

export enum FilterTypes {
  range = 'range',
  single = 'single',
  multiple = 'multiple'
}

export interface Choice {
  displayName: string,
  internalName: string
}

export interface FilterState {
  displayName: string,
  internalName: string,
  type: FilterTypes,
  choices: Choice[]
  original: Choice[],
  active: Choice[],
  pending: Choice[],
  validationMessage: string
}

const getBaseFilterObj = (displayName: string, internalName: string, type: FilterTypes, choices: Choice[], original: Choice[]): FilterState => {
  return {
    displayName,
    internalName,
    type,
    choices: cloneDeep<Choice[]>(choices),
    original: cloneDeep<Choice[]>(original),
    active: cloneDeep<Choice[]>(original),
    pending: cloneDeep<Choice[]>(original),
    validationMessage: ''
  }
};

const getOptionObject = (displayName: string, internalName: string): Choice => ({
  displayName,
  internalName
});

const getRangeFilter = (displayName: string, internalName: string, min: string, max: string): FilterState => {
  return getBaseFilterObj(
    displayName,
    internalName,
    FilterTypes.range,
    [getOptionObject(min, min), getOptionObject(max, max)],
    [getOptionObject(min, min), getOptionObject(max, max)]
  );
};

const getSingleFilter = (displayName: string, internalName: string, choices: Choice[], original: Choice[]) => {
  return getBaseFilterObj(displayName, internalName, FilterTypes.single, choices, original)
};

const getMultipleFilter = (displayName: string, internalName: string, choices: Choice[], original: Choice[]) => {
  return getBaseFilterObj(displayName, internalName, FilterTypes.multiple, choices, original)
};

// const mockChoice = new Array(15).fill('1').map((_, i) => `choice${i+1}`);
const defaultFilters: FilterState[] = [
  getRangeFilter('age', 'age', '1', '100'),
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

export interface DefaultFilterState {
  filter: FilterState[],
  isPendingApplicable: boolean,
  isResettable: boolean,
  dropdown: boolean
}

const defaultFilterState: DefaultFilterState = {
  filter: cloneDeep<FilterState[]>(defaultFilters),
  isPendingApplicable: false,
  isResettable: false,
  dropdown: false
};

export default defaultFilterState
