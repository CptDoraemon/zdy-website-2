import {connect} from "react-redux";
import FiltersGroup from "./filters-group";
import {filterActionsGenerators} from "../redux/actions/filter/filter";

function mapDispatchToProps(dispatch) {
  return {
    updatePendingFilter: (title, pending) => dispatch(filterActionsGenerators.updatePendingFilter(title, pending)),
    toggleDropdown: () => dispatch(filterActionsGenerators.toggleDropdown()),
    applyPendingFilter: () => dispatch(filterActionsGenerators.applyPendingFilter()),
    resetFilter: () => dispatch(filterActionsGenerators.resetFilter())
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filter.filter,
    isPendingApplicable: state.filter.isPendingApplicable,
    isResettable: state.filter.isResettable,
    disabled: state.table.disabled,
    dropdown: state.filter.dropdown
  }
}

const FiltersGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersGroup);

export default FiltersGroupContainer
