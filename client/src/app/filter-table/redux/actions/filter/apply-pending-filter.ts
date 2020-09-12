import {filterActions} from "./filter";
import {cloneDeep, isEqual} from 'lodash'
import checkIfFilterValidationErrorExists from "./utils/check-if-filter-validation-error-exists";
import {tableActionsGenerators} from "../table/table";
import {FilterTableDefaultState} from "../../states/root-states";


const applyPendingFilter = () => {
  return (dispatch: any, getStore: () => FilterTableDefaultState) => {
    const store = getStore();
    const prevFilterArray = store.filter.filter;
    // do not proceed if validation error exists
    if (checkIfFilterValidationErrorExists(prevFilterArray)) {
      return
    }

    // proceed if clear of validation error
    const updatedFilterArray = prevFilterArray.map(obj => {
      return Object.assign(
        {},
        obj,
        {active: cloneDeep(obj.pending)},
      )
    });

    // check if the new active filters is the same as the original filters
    let isResettable = false;
    for (let i=0; i<updatedFilterArray.length; i++) {
      if (!isEqual(updatedFilterArray[i].active, updatedFilterArray[i].original)) {
        isResettable = true;
        break;
      }
    }

    dispatch({
      type: filterActions.FILTER_SET_FILTER_STATE,
      newFilterState: Object.assign(
        {},
        getStore().filter,
        {
          filter: updatedFilterArray,
          isPendingApplicable: false,
          isResettable
        }
      )
    });

    dispatch(tableActionsGenerators.fetchData())
  }
};

export default applyPendingFilter
