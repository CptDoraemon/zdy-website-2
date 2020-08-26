import filterTableDefaultState from "../states/root-states";
import {filterActions} from "../actions/filter/filter";

function filter(state = filterTableDefaultState.filter, actions) {
  switch (actions.type) {
    case filterActions.FILTER_SET_FILTER_STATE:
      return actions.newFilterState;
    case filterActions.FILTER_TOGGLE_DROPDOWN:
      return Object.assign(
        {},
        state,
        {
          dropdown: !state.dropdown,
        }
      );
    default:
      return state
  }
}

export default filter
