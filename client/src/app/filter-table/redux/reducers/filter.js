import filterTableDefaultState from "../states/root-states";
import {filterActions} from "../actions/filter";
import { cloneDeep } from 'lodash';

const handleUpdatePendingFilter = (state, newPending, title) => {

};

function filter(state = filterTableDefaultState.filter, actions) {
  switch (actions.type) {
    case filterActions.FILTER_UPDATE_PENDING_FILTER:
      return (() => {

      })();
    default:
      return state
  }
}

export default filter
