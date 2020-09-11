import filterTableDefaultState from "../states/root-states";
import {tableActions} from "../actions/table/table";

function table(state = filterTableDefaultState.table, actions) {
  switch (actions.type) {
    case tableActions.TABLE_TOGGLE_DENSE:
      return Object.assign(
        {},
        state,
        {dense: actions.dense}
      );
    case tableActions.TABLE_CHANGE_PAGE:
      return Object.assign(
        {},
        state,
        {currentPage: actions.page}
      );
    case tableActions.TABLE_START_FETCH_DATA:
      return Object.assign(
        {},
        state,
        {
          loading: true,
          error: false,
          errorMessage: '',
          disabled: true
        }
      );
    case tableActions.TABLE_FETCH_DATA_SUCCEEDED:
      return Object.assign(
        {},
        state,
        {
          data: actions.tableData,
          currentPage: actions.currentPage,
          totalPages: actions.totalPages,
          totalRows: actions.totalRows,
          loading: false,
          disabled: false
        }
      );
    case tableActions.TABLE_FETCH_DATA_FAILED:
      return Object.assign(
        {},
        state,
        {
          loading: false,
          disabled: false,
          error: true,
          errorMessage: actions.message,
        }
      );
    default:
      return state
  }
}

export default table
