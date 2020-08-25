import filterTableDefaultState from "../states/root-states";
import {tableActions} from "../actions/table";

function table(state = filterTableDefaultState.table, actions) {
  switch (actions.type) {
    case tableActions.TABLE_TOGGLE_DENSE:
      return Object.assign(
        {},
        state,
        {dense: !state.dense}
      );
    case tableActions.TABLE_CHANGE_PAGE:
      return Object.assign(
        {},
        state,
        {currentPage: actions.page}
      );
    default:
      return state
  }
}

export default table
