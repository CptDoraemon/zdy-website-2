import {sortActionsGenerators} from "../redux/actions/sort";
import {tableActionsGenerators} from "../redux/actions/table";
import {connect} from "react-redux";
import SearchTable from "./search-table";

function mapDispatchToProps(dispatch) {
  return {
    sortUpdater: (internalName, selected) => {
      dispatch(sortActionsGenerators.updateSort(internalName, selected))
    },
    toggleDense: () => {
      dispatch(tableActionsGenerators.toggleDense())
    },
    changePage: (page) => {
      dispatch(tableActionsGenerators.changePage(page))
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state.table,
  }
}

const SearchTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTable);

export default SearchTableContainer
