import {filterActions} from "./filter";
import {cloneDeep} from 'lodash'
import checkIfFilterValidationErrorExists from "./utils/check-if-filter-validation-error-exists";
import {tableActionsGenerators} from "../table/table";


const applyPendingFilter = () => {
  return (dispatch, getStore) => {
    const prevFilterArray = getStore().filter.filter;
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

    dispatch({
      type: filterActions.FILTER_SET_FILTER_STATE,
      newFilterState: Object.assign(
        {},
        getStore().filter,
        {
          filter: updatedFilterArray,
          isPendingApplicable: false,
        }
      )
    });

    dispatch(tableActionsGenerators.fetchData())
  }
};

export default applyPendingFilter
