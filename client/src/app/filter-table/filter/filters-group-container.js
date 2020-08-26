import {connect} from "react-redux";
import FiltersGroup from "./filters-group";
import {filterActionsGenerators} from "../redux/actions/filter";

function mapDispatchToProps(dispatch) {
  return {
    updatePendingFilter: (title, pending) => dispatch(filterActionsGenerators.updatePendingFilter(title, pending)),
    toggleDropdown: () => dispatch(filterActionsGenerators.toggleDropdown())
  }
}

function mapStateToProps(state) {
  return {
    filters: state.table.filter.filter,
    isPendingApplicable: state.table.filter.isPendingApplicable,
    isResettable: state.table.filter.isResettable,
    disabled: state.table.table.disabled,
    dropdown: state.table.filter.dropdown
  }
}

const FiltersGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersGroup);

export default FiltersGroupContainer
