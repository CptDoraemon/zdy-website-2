import updatePendingFilter from "./update-pending-filter";
import applyPendingFilter from "./apply-pending-filter";
import resetFilter from "./reset-filter";

export const filterActions = {
  'FILTER_SET_FILTER_STATE': 'FILTER_SET_FILTER_STATE',
  'FILTER_TOGGLE_DROPDOWN': 'FILTER_TOGGLE_DROPDOWN'
};

const toggleDropdown = () => {
  return {
    type: filterActions['FILTER_TOGGLE_DROPDOWN']
  }
};

//
// const applyPendingFilterAndRefreshData = () => {
//   return (dispatch) => {
//     dispatch(applyPendingFilter());
//     dispatch(tableActionsGenerators.fetchData());
//   }
// };

export const filterActionsGenerators = {
  updatePendingFilter,
  toggleDropdown,
  applyPendingFilter,
  resetFilter
};
