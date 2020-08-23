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
    default:
      return state
  }
}

export default table
