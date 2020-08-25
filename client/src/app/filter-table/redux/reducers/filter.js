import filterTableDefaultState from "../states/root-states";
import {filterActions} from "../actions/filter";
import {types as filterTypes} from "../states/filter";
import { cloneDeep } from 'lodash';

/**
 * @param {import('../states/filter').DefaultFilterState} prevState
 * @param {string} title
 * @param {*[]} pending
 */
const handleUpdatePendingFilter = (prevState, title, pending) => {
  prevState = cloneDeep(prevState);
  let targetFilter;
  let targetFilterIndex;
  for (let i=0; i<prevState.length; i++) {
    if (prevState[i].title === title) {
      targetFilter = cloneDeep(prevState[i]);
      targetFilterIndex = i;
      break;
    }
  }

  let updatedTargetFilter;
  switch (targetFilter.type) {
    case filterTypes.range:
      updatedTargetFilter = updateRangeFilter(targetFilter, pending);
      break;
    case filterTypes.single:
      updatedTargetFilter = updateSingleFilter(targetFilter, pending);
      break;
    case filterTypes.multiple:
      updatedTargetFilter = updateMultipleFilter(targetFilter, pending);
      break;
    default:
      updatedTargetFilter = targetFilter
  }

  prevState.splice(targetFilterIndex, 1, updatedTargetFilter);
  return prevState
};

/**
 * @param {import('../states/filter').FilterState} state
 * @param {number[]} pending
 */
const updateRangeFilter = (state, pending) => {
  // reset error message
  state.validationMessage = '';

  // check validations
  const allowedMin = state.choices[0];
  const allowedMax = state.choices[1];
  const min = parseFloat(pending[0]);
  const max = parseFloat(pending[1]);
  console.log(min, max, allowedMin, allowedMax);

  const isValid = min >= allowedMin && max <= allowedMax && min <= max;
  if (!isValid) {
    state.validationMessage = `The number should between ${allowedMin} and ${allowedMax}`;
  }
  state.pending = [min, max];
  return state
};

/**
 * @param {import('../states/filter').FilterState} state
 * @param {number[]} pending
 */
const updateSingleFilter = (state, pending) => {
  state.validationMessage = '';
  state.pending = pending.slice();
  return state
};

/**
 * @param {import('../states/filter').FilterState} state
 * @param {number[]} pending
 */
const updateMultipleFilter = (state, pending) => {
  // reset error message
  state.validationMessage = '';

  // check validations
  state.pending = pending.slice();

  if (pending.length === 0) {
    state.validationMessage = 'At lease one is required';
  }
  return state
};

function filter(state = filterTableDefaultState.filter, actions) {
  switch (actions.type) {
    case filterActions.FILTER_UPDATE_PENDING_FILTER:
      return (() => {
        const prevState = state.filter;
        return Object.assign(
          {},
          state,
          {
            filter: handleUpdatePendingFilter(prevState, actions.title, actions.pending),
            isPendingApplicable: true
          }
        )
      })();
    default:
      return state
  }
}

export default filter
