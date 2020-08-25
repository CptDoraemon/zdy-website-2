import {connect} from "react-redux";
import FiltersGroup from "./filters-group";

function mapDispatchToProps(dispatch) {
  return {

  }
}

function mapStateToProps(state) {
  return {
    filters: state.table.filter.pending,
    isPendingApplicable: state.table.filter.isPendingApplicable,
    isResettable: state.table.filter.isResettable,
    disabled: state.table.table.disabled
  }
}

const FiltersGroupContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersGroup);

export default FiltersGroupContainer
