import {cloneDeep} from "lodash";
import {tableActionsGenerators} from "./table/table";

export const sortActions = {
  'SORT_UPDATE_SORT': 'SORT_UPDATE_SORT'
};

/**
 * @param {string} internalName
 * @param {string} selected
 */
const updateSort = (internalName, selected) => {
  return (dispatch, getState) => {
    const newSortState = cloneDeep(getState().sort);
    for (let i=0; i<newSortState.length; i++) {
      if (newSortState[i].title.internalName === internalName) {
        newSortState[i].selected = selected;
        break;
      }
    }
    dispatch({
      type: sortActions['SORT_UPDATE_SORT'],
      newSortState: newSortState
    });

    // need reset page when new sort is applied
    dispatch(tableActionsGenerators.changePage(1));
    dispatch(tableActionsGenerators.fetchData())
  };
};

export const sortActionsGenerators = {
  updateSort
};
