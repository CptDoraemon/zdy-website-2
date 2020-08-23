import filterTableDefaultState from "../states/root-states";
import {sortActions} from "../actions/sort";
import {cloneDeep} from "lodash";

function sort(state = filterTableDefaultState.sort, actions) {
  switch (actions.type) {
    case sortActions.SORT_UPDATE_SORT:
      return (() => {
        const newState = cloneDeep(state);
        for (let i=0; i<state.length; i++) {
          if (state[i].title.internalName === actions.internalName) {
            newState[i].selected = actions.selected;
            return newState;
          }
        }
      })();
    default:
      return state
  }
}

export default sort
